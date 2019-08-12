var toolbox = document.getElementById('toolbox');
var options = {
  toolbox : toolbox,
  collapse : true,
  comments : true,
  disable : true,
  maxBlocks : Infinity,
  trashcan : true,
  horizontalLayout : false,
  toolboxPosition : 'start',
  css : true,
  media : 'media/',
  rtl : false,
  scrollbars : true,
  sounds : true,
  oneBasedIndex : true,
  grid : {
    spacing : 20,
    length : 1,
    colour : '#888',
    snap : true
  },
  zoom : {
    controls : true,
    wheel : true,
    startScale : 1,
    maxScale : 3,
    minScale : 0.3,
    scaleSpeed : 1.2
  }
};

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv, options);
var workspaceBlocks = document.getElementById('workspaceBlocks');

/* Load custom workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);


var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);
