// the json parser.
// to add blocks imported from blockly developer tools, download json and paste it here.

Blockly.defineBlocksWithJsonArray([{
  "type": "csl_led_toggle",
  "message0": "Toggle %1 LED",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "1st",
          "1"
        ],
        [
          "2nd",
          "2"
        ],
        [
          "3rd",
          "3"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 43,
  "tooltip": "Toggle the LEDs on the LED pins ",
  "helpUrl": ""
}]); // END OF JSON EXTRACT

function saveWorkspace(){
  var xml = Blockly.Xml.workspaceToDom(workspace);
  var xml_text = Blockly.Xml.domToText(xml);
  return xml_text;
}

function loadWorkspace(xml_text){
  var xml = Blockly.Xml.textToDom(xml_text);
  Blockly.Xml.domToWorkspace(xml, workspace);
}

function clearWorkspace(){
  workspace.clear();
}
