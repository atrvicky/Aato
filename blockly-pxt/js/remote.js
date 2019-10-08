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
let instancesRepo = document.getElementById('remote-instances-repo');
let joystickRepo = document.getElementById('repo-joystick');
let remoteCanvas = document.querySelector('.remote-workspace-wrapper');

let remoteElements = [];    // stores the itemIds of the added remote items.
let remoteUIs = []; // stores a json for the itemId, itemType, position and size
let addedRemoteQuantity = 0;    // can be deprecated
let maxRemoteLimit = 10;
let joystickCount = 0;
let sliderCount = 0;
let isRemoteEnabled = false;
let newDrop = true; // flag to indicate if an item is dropped for the first time
let designMode = true;  // flag indicates whether currently in design mode or edit mode
let dragStartX = 0;
let dragStartY = 0;


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
    checkEmptyRemoteContainer();
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

/* actual version of the drag-drop handler can be found at https://codepen.io/Neddard/pen/KKKKEvr */

let drag_start = (event) => {
    if (designMode) {
        var style = window.getComputedStyle(event.target, null);
        event.dataTransfer.setData("text/plain", parseInt(style.getPropertyValue("left"), 10) - event.clientX + "," + (parseInt(style.getPropertyValue("top"), 10) - event.clientY));
        event.dataTransfer.setData("text/id", event.target.id);
    }

    // we need to know at what point the element is clicked and dragged
    // using these values at drop will give a more natural drop experience
    dragStartX = event.clientX - (getPosition(event.target)).x;
    dragStartY = event.clientY - (getPosition(event.target)).y;
};

let drag_over = (event) => {
    if (designMode) {
        event.preventDefault();
        checkBoundaries(event);
        return false;
    }
};

let drop = (event) => {
    if (designMode) {
        event.preventDefault();
        
        // get the drop coordinates
        let dropY = event.clientY;
        let dropX = event.clientX;
        
        // get the dragged element's id
        let IdData = event.dataTransfer.getData("text/id");
        // the id has four parts: added-remote-ITEMTYPE-ITEMCOUNT
        // create substrings using the '-'
        IdData = IdData.split('-');
        
        // items dragged from the canvas will have the keyword
        // "canvas"instead of "remote" in index 1
        // if so, they are not new drops
        newDrop = IdData[1] != 'canvas';

        // the second index contains the itemType information
        let itemType = IdData[2];

        // the third index contains the itemNo
        let itemNo = IdData[3];

        // check if the item is dropped fresh
        if (newDrop){
            // create functional instances (actual slider, joystick, etc) of the item being dropped
            let itemInstance = getInstance(itemType, itemNo);
    
            // add the target element to the canvas
            // let tm = document.getElementById(targetId);
            remoteCanvas.innerHTML = remoteCanvas.innerHTML + itemInstance;
    
        }
        
        // set the instance's position to absolute w.r.t the parent container(the remote)
        let instanceId = 'added-canvas-' + itemType + '-' + itemNo;
        let instanceElement = document.getElementById(instanceId);

        // adjust for the parent's position
        let parentX = getPosition(remoteCanvas).x;
        let parentY = getPosition(remoteCanvas).y;

        // calculate the instance's startX, startY, endX and endY
        instanceElement.style.top = dropY - parentY - dragStartY + 'px';
        instanceElement.style.left = dropX - parentX - dragStartX + 'px';

        // create a json with id, type, startX, startY, endX, endY
        let child = {
            id: instanceId,
            top: instanceElement.style.top,
            left: instanceElement.style.left,
            width: instanceElement.offsetWidth,
            height: instanceElement.offsetHeight
        };
        
        // add the json to the remoteUIs array.
        addChildToArray(child);
        
        // if it is a new drop, hide the parent item from the added-remote-list
        IdData = IdData.join('-');
        if (newDrop){
            $('#' + IdData).hide();            
        }

        // finally, add resize listeners
        addResizeListener(instanceElement, instance_resize);

        checkEmptyRemoteContainer();
        return false;
    }
};

/**
 * Create the functional instances of the remote items using the itemType
 * 
 * @param {String} itemType The item type indicator
 * @param {Number} itemNo The item count for the specified item.
 */

let getInstance = (itemType, itemNo) => {
    let itemInstance;
    switch (itemType) {
        case 'joystick':
            itemInstance = joystickRepo.innerHTML;
            break;
    }
    itemInstance = itemInstance.replace('{{itemNo}}', itemNo)
    console.log(itemInstance);
    return itemInstance;
};

/**
 * 
 * Adds or updates the @param child to the @param remoteUIs array.
 * @param {JSON} child Adds the childInfo json to the remoteUIs and updates the remoteCanvas
 */
let addChildToArray = (child) => {
    if (remoteUIs.length > 0) {
        for (let i in remoteUIs) {
            let spoiledChild = remoteUIs[i];
            if (spoiledChild.id == child.id) {
                remoteUIs.pop(spoiledChild);
                break;
            }
        }
    }
    remoteUIs.push(child);
};


/**
 * 
 * Checks for overlap when items are dragged and also keeps the drag within boundary.
 * If there are overlaps, the item is dropped to the right or left of the interface that is being overlapped.
 * If the drop is beyond the dropZone, the item is drop at the top-left corner of the dropZone.
 * Any overlaps even then will be handled just as stated above.
 * 
 * @param {DragEvent} event The dragEvent interface that contains the information about the drag
 */
let checkBoundaries = (event) => {
    let eventX = event.clientX;
    let eventY = event.clientY;
};

/**
 * 
 * Handles the resizing of the dropped interfaces.
 * 
 * @param {DragEvent} event The dragEvent interface that contains the information about the drag
 */

let instance_resize = (event) => {
    let newWidth = event.target.__resizeTrigger__.clientWidth;
    let newHeight = event.target.__resizeTrigger__.clientHeight;
    let resizedElementId = event.target.__resizeTrigger__.id;

    // update the child in remoteUIs
    for (let i in remoteUIs){
        let spoiledChild = remoteUIs[i];
            if (spoiledChild.id == resizedElementId) {
                spoiledChild.width = newWidth;
                spoiledChild.height = newHeight;
                addChildToArray(spoiledChild);
                break;
            }
    }
};

let checkEmptyRemoteContainer = () => {
    if (remoteUIs.length >= remoteElements.length){
        $('#no-remote-item-msg').show();
    } else{
        $('#no-remote-item-msg').hide();
    }
};

// Helper function to get an element's exact position
let getPosition = (el) => {
    var xPos = 0;
    var yPos = 0;

    while (el) {
        if (el.tagName == "BODY") {
            // deal with browser quirks with body/window/document and page scroll
            var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
            var yScroll = el.scrollTop || document.documentElement.scrollTop;

            xPos += (el.offsetLeft - xScroll + el.clientLeft);
            yPos += (el.offsetTop - yScroll + el.clientTop);
        } else {
            // for all other non-BODY elements
            xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
            yPos += (el.offsetTop - el.scrollTop + el.clientTop);
        }

        el = el.offsetParent;
    }
    return {
        x: xPos,
        y: yPos
    };
};


// the resize listeners
// (http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/)
(function(){
    var attachEvent = document.attachEvent;
    var isIE = navigator.userAgent.match(/Trident/);
    console.log(isIE);
    var requestFrame = (function(){
      var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
          function(fn){ return window.setTimeout(fn, 20); };
      return function(fn){ return raf(fn); };
    })();
    
    var cancelFrame = (function(){
      var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
             window.clearTimeout;
      return function(id){ return cancel(id); };
    })();
    
    function resizeListener(e){
      var win = e.target || e.srcElement;
      if (win.__resizeRAF__) cancelFrame(win.__resizeRAF__);
      win.__resizeRAF__ = requestFrame(function(){
        var trigger = win.__resizeTrigger__;
        trigger.__resizeListeners__.forEach(function(fn){
          fn.call(trigger, e);
        });
      });
    }
    
    function objectLoad(e){
      this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__;
      this.contentDocument.defaultView.addEventListener('resize', resizeListener);
    }
    
    window.addResizeListener = function(element, fn){
      if (!element.__resizeListeners__) {
        element.__resizeListeners__ = [];
        if (attachEvent) {
          element.__resizeTrigger__ = element;
          element.attachEvent('onresize', resizeListener);
        }
        else {
          if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
          var obj = element.__resizeTrigger__ = document.createElement('object'); 
          obj.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
          obj.__resizeElement__ = element;
          obj.onload = objectLoad;
          obj.type = 'text/html';
          if (isIE) element.appendChild(obj);
          obj.data = 'about:blank';
          if (!isIE) element.appendChild(obj);
        }
      }
      element.__resizeListeners__.push(fn);
    };
    
    window.removeResizeListener = function(element, fn){
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        if (attachEvent) element.detachEvent('onresize', resizeListener);
        else {
          element.__resizeTrigger__.contentDocument.defaultView.removeEventListener('resize', resizeListener);
          element.__resizeTrigger__ = !element.removeChild(element.__resizeTrigger__);
        }
      }
    }
  })();


// perform this check at the end of loading the file.
checkRemoteCount();