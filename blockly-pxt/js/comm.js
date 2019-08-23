let ws;
let url = "ws://192.168.4.1:8266/"
let connected = false;
let instantUpload = false;
let binary_state = 0;
let put_file_name = null;
let put_file_data = null;
let get_file_name = null;
let get_file_data = null;
let connectBtn = document.getElementById("connect-btn");
let connectBtnFav = document.getElementById("connect-fav");
let connectFav = '<i class="fas fa-link" id="connect-fav"></i>';
let disconnectFav = '<i class="fas fa-unlink" id="connect-fav"></i>';
let uploadBtn = document.getElementById("upload-btn");
let uploadBtnFav = document.getElementById("upload-fav");
let fileStatus = document.getElementById("file-status");
let statusToastBody = document.getElementsByClassName("toast-body")[0];
let instantUploadSwitch = document.getElementById("instant-upload-switch");

checkConnectionStatus()

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

function initConnection() {
    if (connected) {
        ws.close();
    } else {
        connected = true;
        connect(url);
    }
    checkConnectionStatus();
}

instantUploadSwitch.onchange = () => {
    instantUpload = !instantUpload;
    uploadBtn.hidden = instantUpload;
};

function checkConnectionStatus() {
    connectBtn.innerHTML = connected ? disconnectFav : connectFav;
    uploadBtn.disabled = !connected;
    // uploadBtn.disabled = false;
}

function update_file_status(s) {
    // fileStatus.innerHTML = s;
    // fileStatus.style.display = "block";
    // setInterval(() => {
    //     fileStatus.style.display = "none"
    // }, 3000);
    statusToastBody.innerHTML = s;
    $('.toast').toast({
        'delay': 5000
    });
    $('.toast').toast('show');
}

function show_settings(){
    $('#settingsModal').modal({
        'show': true
    });
}

function sendPassword(){
    $('#repl-password').val('');
    $('#passwordModal').on('shown.bs.modal', function () {
        $('#repl-password').trigger('focus');
      })
    $('#passwordModal').modal({
        'backdrop':'static',
        'show': true
    });
    $('#repl-password').on('input', (event) => {
        let passCount = $('#repl-password').val().length;
        if (passCount === 4) parse_send_password();
    });
}

function parse_send_password(){
    let pw = $('#repl-password').val();
    sendData(pw);
    $('#passwordModal').modal('hide');
}

function upload(){
    if (!instantUpload){
        let eventLoop = "import gpio, sensors, pwm, utime \n";
        eventLoop = eventLoop + Blockly.Python.workspaceToCode(workspace);
        console.log(eventLoop);
        handle_put_file_select(eventLoop)
    } else {
        console.log("Instant Upload enabled. Disable it to enable upload functions.");
    }
}

function sendData(data){
    // data = data.replace(/\n/g, "");
    if (connected){
        data = data + '\r\n';
        ws.send(data);
    } else {
        console.log("Websocket unavailable!");
    }
}

function connect(url) {
    update_file_status("Connecting..");
    ws = new WebSocket(url);
    ws.binaryType = 'arraybuffer';
    ws.onopen = function() {
        update_file_status("Websocket Connected.");
        let msg = ""
        ws.onmessage = function(event) {
            if (event.data instanceof ArrayBuffer) {
                let data = new Uint8Array(event.data);
                switch (binary_state) {
                    case 11:
                        // first response for put
                        if (decode_resp(data) == 0) {
                            // send file data in chunks
                            for (let offset = 0; offset < put_file_data.length; offset += 1024) {
                                ws.send(put_file_data.slice(offset, offset + 1024));
                            }
                            binary_state = 12;
                        }
                        break;
                    case 12:
                        // final response for put
                        if (decode_resp(data) == 0) {
                            update_file_status('Sent ' + put_file_name + ', ' + put_file_data.length + ' bytes');
                        } else {
                            update_file_status('Failed sending ' + put_file_name);
                        }
                        binary_state = 0;
                        break;

                    case 21:
                        // first response for get
                        if (decode_resp(data) == 0) {
                            binary_state = 22;
                            let rec = new Uint8Array(1);
                            rec[0] = 0;
                            ws.send(rec);
                        }
                        break;
                    case 22: {
                        // file data
                        let sz = data[0] | (data[1] << 8);
                        if (data.length == 2 + sz) {
                            // we assume that the data comes in single chunks
                            if (sz == 0) {
                                // end of file
                                binary_state = 23;
                            } else {
                                // accumulate incoming data to get_file_data
                                let new_buf = new Uint8Array(get_file_data.length + sz);
                                new_buf.set(get_file_data);
                                new_buf.set(data.slice(2), get_file_data.length);
                                get_file_data = new_buf;
                                update_file_status('Getting ' + get_file_name + ', ' + get_file_data.length + ' bytes');

                                let rec = new Uint8Array(1);
                                rec[0] = 0;
                                ws.send(rec);
                            }
                        } else {
                            binary_state = 0;
                        }
                        break;
                    }
                    case 23:
                        // final response
                        if (decode_resp(data) == 0) {
                            update_file_status('Got ' + get_file_name + ', ' + get_file_data.length + ' bytes');
                            saveAs(new Blob([get_file_data], {type: "application/octet-stream"}), get_file_name);
                        } else {
                            update_file_status('Failed getting ' + get_file_name);
                        }
                        binary_state = 0;
                        break;
                    case 31:
                        // first (and last) response for GET_VER
                        console.log('GET_VER', data);
                        binary_state = 0;
                        break;
                }
            }
            let msg = event.data;
            console.log(msg);

            if (msg.match(/Password:/g) != null){
                sendPassword();
            } else if (msg.match(/Access denied/gi)){
                connected = false;
                update_file_status(msg);
                checkConnectionStatus()
            } else if (msg.match(/WebREPL connected/gi)){
                connected = true;
                update_file_status("Connected");
                checkConnectionStatus()
            } else {
                update_file_status(msg);
            }
        };
    };

    ws.onclose = function() {
        connected = false;
        update_file_status("Disconnected");
        checkConnectionStatus();
    }
}

function decode_resp(data) {
    if (data[0] == 'W'.charCodeAt(0) && data[1] == 'B'.charCodeAt(0)) {
        let code = data[2] | (data[3] << 8);
        return code;
    } else {
        return -1;
    }
}

function put_file() {
    let dest_fname = put_file_name;
    let dest_fsize = put_file_data.length;

    // WEBREPL_FILE = "<2sBBQLH64s"
    let rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
    rec[0] = 'W'.charCodeAt(0);
    rec[1] = 'A'.charCodeAt(0);
    rec[2] = 1; // put
    rec[3] = 0;
    rec[4] = 0; rec[5] = 0; rec[6] = 0; rec[7] = 0; rec[8] = 0; rec[9] = 0; rec[10] = 0; rec[11] = 0;
    rec[12] = dest_fsize & 0xff; rec[13] = (dest_fsize >> 8) & 0xff; rec[14] = (dest_fsize >> 16) & 0xff; rec[15] = (dest_fsize >> 24) & 0xff;
    rec[16] = dest_fname.length & 0xff; rec[17] = (dest_fname.length >> 8) & 0xff;
    for (let i = 0; i < 64; ++i) {
        if (i < dest_fname.length) {
            rec[18 + i] = dest_fname.charCodeAt(i);
        } else {
            rec[18 + i] = 0;
        }
    }

    // initiate put
    binary_state = 11;
    update_file_status('Sending ' + put_file_name + '...');
    ws.send(rec);
}

function get_file() {
    let src_fname = document.getElementById('get_filename').value;

    // WEBREPL_FILE = "<2sBBQLH64s"
    let rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
    rec[0] = 'W'.charCodeAt(0);
    rec[1] = 'A'.charCodeAt(0);
    rec[2] = 2; // get
    rec[3] = 0;
    rec[4] = 0; rec[5] = 0; rec[6] = 0; rec[7] = 0; rec[8] = 0; rec[9] = 0; rec[10] = 0; rec[11] = 0;
    rec[12] = 0; rec[13] = 0; rec[14] = 0; rec[15] = 0;
    rec[16] = src_fname.length & 0xff; rec[17] = (src_fname.length >> 8) & 0xff;
    for (let i = 0; i < 64; ++i) {
        if (i < src_fname.length) {
            rec[18 + i] = src_fname.charCodeAt(i);
        } else {
            rec[18 + i] = 0;
        }
    }

    // initiate get
    binary_state = 21;
    get_file_name = src_fname;
    get_file_data = new Uint8Array(0);
    update_file_status('Getting ' + get_file_name + '...');
    ws.send(rec);
}

function get_ver() {
    // WEBREPL_REQ_S = "<2sBBQLH64s"
    let rec = new Uint8Array(2 + 1 + 1 + 8 + 4 + 2 + 64);
    rec[0] = 'W'.charCodeAt(0);
    rec[1] = 'A'.charCodeAt(0);
    rec[2] = 3; // GET_VER
    // rest of "rec" is zero

    // initiate GET_VER
    binary_state = 31;
    ws.send(rec);
}

function handle_put_file_select(code) {
    put_file_name = "event.py";
    put_file_data = rawStringToBuffer(code);
    put_file();
}

function rawStringToBuffer(str) {
    let idx, len = str.length, arr = new Array( len );
    for ( idx = 0 ; idx < len ; ++idx ) {
        arr[ idx ] = str.charCodeAt(idx) & 0xFF;
    }
    // You may create an ArrayBuffer from a standard array (of values) as follows:
    return new Uint8Array(arr);
}