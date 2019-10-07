"use strict"

let windowWidth;
let windowHeight;

let showRemoteBtn = document.getElementById("show-remote-btn");
let showRemoteFav = document.getElementById("show-remote-fav");
let remoteDiv = document.getElementById("remote-div");
let remoteItemsContainer = document.getElementById('remote-item-list-container');
let addedRemoteItemsContainer = document.getElementById('added-remote-item-list-container');
let addRemoteItemBtn = document.getElementById("add-remote-item-btn");
let addJoystickBtn = document.getElementById("add-joystick-btn");
let addSliderBtn = document.getElementById("add-slider-btn");
let playBtn = document.getElementById('play-btn');
let remoteBuilderDiv = document.getElementById('remote-builder-wrapper');
let remoteWorkspace = document.getElementById('remote-builder');


let remoteElements = [];    // stores the itemIds of the added remote items.
let remoteUIs = []; // stores a json for the itemId, itemType, position and size
let addedRemoteQuantity = 0;    // can be deprecated
let maxRemoteLimit = 10;
let joystickCount = 0;
let sliderCount = 0;
let isRemoteEnabled = false;
let newDrop = true; // flag to indicate if an item is dropped for the first time

let joystickOptions = {
    zone: remoteWorkspace,
    color: '#FF2400',
    size: 200,
    multitouch: false,
    maxNumberOfNipples: 1,
    dataOnly: true,
    position: {},
    mode: 'static',
    dynamicPage: false
};

let addedItemTemplate = () => {
    return $('#remote-template').html();
};

let addedDraggableItemTemplate = () => {
    return $('#added-remote-template').html();
};

window.addEventListener('load', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    showRemoteBtn.disabled = false;
});

let initiateRemoteMode = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    if (windowWidth > 720) {
        let remoteDivDisplay = remoteDiv.style.display;
        remoteDiv.className = remoteDivDisplay === "none" ? "col-md-3" : "col-md-0";
        blocklyArea.className = remoteDivDisplay === "none" ? "col-md-9" : "col-md-12";
        remoteBuilderDiv.className = remoteDivDisplay === "none" ? "col-md-9" : "col-md-12";
        showRemoteBtn.className = remoteDivDisplay === "none" ? "btn btn-dark" : "btn btn-light";
        // blocklyArea.style.height = remoteDivDisplay === "none" && window.innerWidth < 720 ? "75%" : "100%";
        // remoteDiv.style.height = remoteDivDisplay === "none" && window.innerWidth < 720 ? "25%" : "100%";
        remoteDiv.style.boxShadow = remoteDivDisplay === "none" && window.innerWidth < 720 ? "0px -7px 10px -10px #080708" : "-7px 0px 10px -10px #080708";
        remoteDiv.style.display = remoteDivDisplay === "none" ? "block" : "none";
        onresize();
        remoteInitated();
    } else {
        popError("Remote mode works only in landscape mode. Try rotating your device!");
    }
};

let remoteInitated = () => {
    $('#remote-items-available').html(maxRemoteLimit - addedRemoteQuantity);

    if (remoteElements.length > 0) {
        $('#no-item-msg-container').hide();
        $('#remote-item-list-container').show();
    } else {
        $('#no-item-msg-container').show();
        $('#remote-item-list-container').hide();
        showRemoteBuilder(true);
    }

    addRemoteItemBtn.onclick = () => {
        $('#remoteShowcaseModal').modal({
            'show': true
        });
    };
    checkRemoteCount();
};

addJoystickBtn.onclick = () => {
    createChild('joystick', false);
};

addSliderBtn.onclick = () => {
    createChild('slider', false);
};

let createChild = (itemType, draggable) => {
    let itemCode = '';
    let itemName = '';
    let itemCount = 0;
    addedRemoteQuantity++;

    switch (itemType) {
        case 'joystick':
            joystickCount++;
            itemCode = 'joystick';
            itemName = 'Joystick';
            itemCount = joystickCount;
            break;
        case 'slider':
            sliderCount++;
            itemCode = 'slider';
            itemName = 'Linear Slider';
            itemCount = sliderCount;
            break;
    }

    let childId = 'remote-' + itemCode + '-' + itemCount;
    let draggableChildId = 'added-remote-' + itemCode + '-' + itemCount;
    let childElement = addedItemTemplate();
    let draggableElement = addedDraggableItemTemplate();
    // add unique item id 
    childElement = childElement.replace('{{added-item-id}}', childId);
    draggableElement = draggableElement.replace('{{added-item-id}}', draggableChildId);
    // load the image resource
    childElement = childElement.replace('{{item-img}}', './images/' + itemCode + '.png');
    draggableElement = draggableElement.replace('{{item-img}}', './images/' + itemCode + '.png');
    // set the image description
    childElement = childElement.replace('{{item-alt}}', itemName + ' Controller-' + itemCount);
    draggableElement = draggableElement.replace('{{item-alt}}', itemName + ' Controller-' + itemCount);
    // display item name
    childElement = childElement.replace('{{item-name}}', itemName + '-' + itemCount);
    draggableElement = draggableElement.replace('{{item-name}}', itemName + '-' + itemCount);
    // create delete button
    childElement = childElement.replace('{{delete-remote-btn}}', 'delete-remote-item-' + itemCount);
    // map the delete button to the function
    childElement = childElement.replace('deleteRemoteItem()', 'deleteRemoteItem(\'' + childId + '\')');
    // console.log(childElement);
    // console.log(draggableElement);
    childElement = remoteItemsContainer.innerHTML + childElement;
    draggableElement = addedRemoteItemsContainer.innerHTML + draggableElement;
    remoteElements.push(childId);
    remoteItemsContainer.innerHTML = childElement;
    addedRemoteItemsContainer.innerHTML = draggableElement;
    $('#remoteShowcaseModal').modal('hide');
    remoteInitated();
};

let checkRemoteCount = () => {
    addRemoteItemBtn.disabled = !(addedRemoteQuantity <= 9);
    playBtn.hidden = addedRemoteQuantity == 0;
    uploadBtn.hidden = addedRemoteQuantity > 0;
    instantUploadSwitch.disabled = addedRemoteQuantity > 0;
};

let deleteRemoteItem = (id) => {
    let itemToDelete = document.getElementById(id);
    let draggableItemToDelete = document.getElementById('added-' + id);
    remoteItemsContainer.removeChild(itemToDelete);
    addedRemoteItemsContainer.removeChild(draggableItemToDelete);
    remoteElements.pop(id);
    addedRemoteQuantity--;
    remoteInitated();
};

let showRemoteBuilder = (overWriteRemote) => {
    isRemoteEnabled = overWriteRemote ? false : !isRemoteEnabled;
    whatToShowOnPlayBtn();
    if (!isRemoteEnabled) return;

};

let whatToShowOnPlayBtn = () => {
    blocklyArea.style.display = isRemoteEnabled ? "None" : "block";
    remoteBuilderDiv.style.display = isRemoteEnabled ? "block" : "None";
    playBtn.innerHTML = isRemoteEnabled ? "<i class=\"fas fa-align-left\" id=\"play-fav\"></i> Blocks" : "<i class=\"fas fa-play-circle\" id=\"play-fav\"></i> Play";
    showCode.hidden = isRemoteEnabled;
};



/*let drop = (event) => {
    event.preventDefault();

    // get the drop coordinates
    let offset = event.dataTransfer.getData("text/plain").split(",");
    // get the dragged element's id
    let IdData = event.dataTransfer.getData("text/id");
    // the id has four parts: added-remote-ITEMTYPE-ITEMCOUNT
    // create substrings using the '-'
    IdData = IdData.split('-');

    let tm = document.getElementById(targetId);
    tm.style.left = event.clientX + parseInt(offset[0], 10) + "px";
    tm.style.top = event.clientY + parseInt(offset[1], 10) + "px";
    event.preventDefault();
    let child = {
        id: targetId,
        top: tm.style.top,
        left: tm.style.left,
        width: tm.offsetWidth,
        height: tm.offsetHeight
    };
    addChildToArray(child);
    // remoteUIs.push(child);
    console.log(remoteUIs);
    return false;

    
    let dropX = event.clientX;
    let dropY = event.clientY;
    console.log(dropX + ', ' + dropY);

    
    let data = event.dataTransfer.getData("text");

    

    

    // create functional instances (actual slider, joystick, etc) of the item being dropped
    // let itemInstance = getInstance(itemType, dropX, dropY);

    // set the instance's position to absolute w.r.t the parent container(the remote)


    // add a resizeable container to the instance

    // calculate the instance's startX, startY, endX and endY

    // create a json with id, type, startX, startY, endX, endY

    // add the json to the remoteUIs array.

    // drop it on the drop zone

    // hide the parent item from the added-remote-list

    let childElement = document.getElementById(data);
    // event.target.appendChild(document.getElementById(data));
};

let getInstance = (itemType, x, y) => {
    switch (itemType) {
        case 'joystick':
            joystickOptions.position = {
                top: y,
                left: x
            };
            console.log(joystickOptions);
            let joystickManager = nipplejs.create(joystickOptions);
            return joystickManager;
            break;
    }
};
*/

// perform this check at the end of loading the file.
checkRemoteCount();