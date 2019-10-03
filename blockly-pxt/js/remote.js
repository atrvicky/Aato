"use strict"

let windowWidth;
let windowHeight;

let showRemoteBtn = document.getElementById("show-remote-btn");
let showRemoteFav = document.getElementById("show-remote-fav");
let remoteDiv = document.getElementById("remote-div");
let remoteItemsContainer = document.getElementById('remote-item-list-container');
let addRemoteItemBtn = document.getElementById("add-remote-item-btn");
let addJoystickBtn = document.getElementById("add-joystick-btn");
let addSliderBtn = document.getElementById("add-slider-btn");
let playBtn = document.getElementById('play-btn');

let remoteElements = [];
let addedRemoteQuantity = 0;    // can be deprecated
let maxRemoteLimit = 10;
let joystickCount = 0;
let sliderCount = 0;

let addedItemTemplate = () => {
    return $('#remote-template').html();
};


window.addEventListener('load', () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    showRemoteBtn.disabled = false;
});

let initiateRemoteMode = () => {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;    
    if (windowWidth > 720){
        let remoteDivDisplay = remoteDiv.style.display;
        remoteDiv.className = remoteDivDisplay === "none" ? "col-md-3" : "col-md-0";
        blocklyArea.className = remoteDivDisplay === "none" ? "col-md-9" : "col-md-12";
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

    if(remoteElements.length > 0){
        $('#no-item-msg-container').hide();
        $('#remote-item-list-container').show();        
    } else {
        $('#no-item-msg-container').show();
        $('#remote-item-list-container').hide();
    }

    addRemoteItemBtn.onclick = () => {
        $('#remoteShowcaseModal').modal({
            'show': true
        });
    };
    checkRemoteCount();
};

addJoystickBtn.onclick = () => {
    addedRemoteQuantity++;
    joystickCount++;
    let childId = 'remote-joystick-' + joystickCount;
    let childElement = addedItemTemplate();
    childElement = childElement.replace('{{added-item-id}}', childId);
    childElement = childElement.replace('{{item-img}}', './images/joystick.png');
    childElement = childElement.replace('{{item-alt}}', 'Joystick Controller-' + joystickCount);
    childElement = childElement.replace('{{item-name}}', 'Joystick-' + joystickCount);
    childElement = childElement.replace('{{delete-remote-btn}}', 'delete-remote-item-' + joystickCount);
    childElement = childElement.replace('deleteRemoteItem()', 'deleteRemoteItem(\'' + childId + '\')');
    console.log(childElement);
    childElement = remoteItemsContainer.innerHTML + childElement;
    remoteElements.push(childId);
    remoteItemsContainer.innerHTML = childElement;
    $('#remoteShowcaseModal').modal('hide');
    remoteInitated();
};

addSliderBtn.onclick = () => {
    addedRemoteQuantity++;
    sliderCount++;
    let childId = 'remote-slider-' + sliderCount;
    let childElement = addedItemTemplate();
    childElement = childElement.replace('{{added-item-id}}', childId);
    childElement = childElement.replace('{{item-img}}', './images/slider.png');
    childElement = childElement.replace('{{item-alt}}', 'Linear Slider-' + sliderCount);
    childElement = childElement.replace('{{item-name}}', 'Linear Slider-' + sliderCount);
    childElement = childElement.replace('{{delete-remote-btn}}', 'delete-remote-item-' + sliderCount);
    childElement = childElement.replace('deleteRemoteItem()', 'deleteRemoteItem(\'' + childId + '\')');
    console.log(childElement);
    childElement = remoteItemsContainer.innerHTML + childElement;
    remoteElements.push(childId);
    remoteItemsContainer.innerHTML = childElement;
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
    remoteItemsContainer.removeChild(itemToDelete);
    remoteElements.pop(id);
    addedRemoteQuantity--;
    remoteInitated();
};