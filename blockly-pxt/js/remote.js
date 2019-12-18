'use strict';

let remoteModeOn = false;
let indicatorA = document.getElementById('indicator-light-a');
let indicatorB = document.getElementById('indicator-light-b');
let toggleA = document.getElementById('toggle-a');
let toggleB = document.getElementById('toggle-b');
let buttonA = document.getElementById('btn-a');
let buttonB = document.getElementById('btn-b');
let buttonC = document.getElementById('btn-c');
let buttonD = document.getElementById('btn-d');

let grabBlock = (type, name) => {
    // get all the topBlocks
    let topBlocks = Blockly.mainWorkspace.getTopBlocks();
    // loop through each topBlock element
    // and collect all the buttonBlocks
    let buttons = [];
    for (const block in topBlocks) {
        if (topBlocks.hasOwnProperty(block)) {
            const element = topBlocks[block];
            if (element.type == type){
                buttons.push(element);
            }
        }
    }

    // loop through the buttons and grab buttonA
    if (buttons.length > 0){
        for (const button in buttons){
            if (buttons.hasOwnProperty(button)){
                const block = buttons[button];
                if (block.getFieldValue('NAME') == name){
                    // this is the block of interest
                    return block;
                }
            }
        }
    }
};

// Event callbacks

// toggleA start
toggleA.onchange = (event) => {
    let block = grabBlock('js_toggle_statement', 'toggle_a');
    let code = Blockly.Python.js_toggle_statement(block);
    sendGET(code);
};
// toggleA end


// toggleB start
toggleB.onchange = (event) => {
    let block = grabBlock('js_toggle_statement', 'toggle_b');
    let code = Blockly.Python.js_toggle_statement(block);
    sendGET(code);
};
// toggleB end

//buttonA start
buttonA.onclick = (event) => {
    let block = grabBlock('js_button_statement', 'button_a');
    let code = Blockly.Python.js_button_statement(block);
    sendGET(code);
};
//buttonA end

// buttonB start
buttonB.onclick = (event) => {
    let block = grabBlock('js_button_statement', 'button_b');
    let code = Blockly.Python.js_button_statement(block);
    sendGET(code);
};
// buttonB end

// buttonC start
buttonC.onclick = (event) => {
    let block = grabBlock('js_button_statement', 'button_c');
    let code = Blockly.Python.js_button_statement(block);
    sendGET(code);
};
// buttonC end

// buttonD start
buttonD.onclick = (event) => {
    let block = grabBlock('js_button_statement', 'button_d');
    let code = Blockly.Python.js_button_statement(block);
    sendGET(code);
};
// buttonD end