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
  "colour": 45,
  "tooltip": "Toggle the LEDs on the LED pins ",
  "helpUrl": ""
},
{
  "type": "on_start",
  "message0": "%1 On Start %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 120,
  "tooltip": "Run the blocks once on start",
  "helpUrl": ""
},
{
  "type": "forever",
  "message0": "%1 Forever %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 120,
  "tooltip": "Run the blocks once forever",
  "helpUrl": ""
},
{
  "type": "led_on",
  "message0": "Turn on the  %1 with brightness %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "led_choice",
      "options": [
        [
          "1st LED",
          "1"
        ],
        [
          "2nd LED",
          "2"
        ],
        [
          "3rd LED",
          "3"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "led_lux",
      "value": 100,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Individual LED control",
  "helpUrl": ""
},
{
  "type": "led_all_on",
  "message0": "Turn on all LEDs with brightness %1",
  "args0": [
    {
      "type": "field_number",
      "name": "led_lux",
      "value": 100,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Turn on all the 3 LEDs",
  "helpUrl": ""
},
{
  "type": "led_off",
  "message0": "Turn off  %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "led_choice",
      "options": [
        [
          "1st LED",
          "1"
        ],
        [
          "2nd LED",
          "2"
        ],
        [
          "3rd LED",
          "3"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Turn off LED",
  "helpUrl": ""
},
{
  "type": "led_all_off",
  "message0": "Turn off all LEDs",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Turn off all the 3 LEDs",
  "helpUrl": ""
},
{
  "type": "led_blink",
  "message0": "Blink %1 with brightness %2 at an interval of %3 seconds",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "led_choice",
      "options": [
        [
          "1st LED",
          "1"
        ],
        [
          "2nd LED",
          "2"
        ],
        [
          "3rd LED",
          "3"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "led_lux",
      "value": 100,
      "min": 0,
      "max": 100
    },
    {
      "type": "field_number",
      "name": "led_time",
      "value": 0.5,
      "min": 0.5,
      "max": 30,
      "precision": 0.5
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Blink the LED at specified brightness and specified interval",
  "helpUrl": ""
},
{
  "type": "led_fade",
  "message0": "Fade %1 with brightness %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "led_choice",
      "options": [
        [
          "1st LED",
          "1"
        ],
        [
          "2nd LED",
          "2"
        ],
        [
          "3rd LED",
          "3"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "led_lux",
      "value": 100,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 45,
  "tooltip": "Fade the LED from 0 to specified brightness and back to 0",
  "helpUrl": ""
},
{
  "type": "run_motor",
  "message0": "Run %1 with speed %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "motor_choice",
      "options": [
        [
          "1st motor",
          "1"
        ],
        [
          "2nd motor",
          "2"
        ],
        [
          "3rd motor",
          "3"
        ],
        [
          "4th motor",
          "4"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "motor_speed",
      "value": 100,
      "min": 0,
      "max": 100
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 265,
  "tooltip": "Run motor at specified speed",
  "helpUrl": ""
},
{
  "type": "brake_motor",
  "message0": "Stop %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "motor_choice",
      "options": [
        [
          "1st motor",
          "1"
        ],
        [
          "2nd motor",
          "2"
        ],
        [
          "3rd motor",
          "3"
        ],
        [
          "4th motor",
          "4"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 265,
  "tooltip": "Stop the motor",
  "helpUrl": ""
},
{
  "type": "brake_all_motor",
  "message0": "Stop all motors",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 265,
  "tooltip": "Stop all motors",
  "helpUrl": ""
},
{
  "type": "read_ir",
  "message0": "Infrared Sensor %1 detects obstacle (not black)",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "ir_choice",
      "options": [
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ]
      ]
    }
  ],
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": 315,
  "tooltip": "The infrared sensor sensor senses black or no obstacle",
  "helpUrl": ""
},
{
  "type": "read_gpio",
  "message0": "Read state on GPIO pin %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gpio_choice",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ]
      ]
    }
  ],
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": 150,
  "tooltip": "Read the input on GPIO pin",
  "helpUrl": ""
},
{
  "type": "read_gpio_pup",
  "message0": "Read state on GPIO pin %1 with input pull-up",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gpio_choice",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ]
      ]
    }
  ],
  "output": [
    "Boolean",
    "Number"
  ],
  "colour": 150,
  "tooltip": "Read the input on GPIO pin with input pull-up enabled",
  "helpUrl": ""
},
{
  "type": "write_gpio",
  "message0": "Set GPIO pin %1 to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gpio_choice",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "Boolean",
        "Number"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "Set the value of GPIO pin",
  "helpUrl": ""
},
{
  "type": "gpio_on",
  "message0": "%1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gpio_choice",
      "options": [
        [
          "On",
          "1"
        ],
        [
          "Off",
          "0"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 150,
  "tooltip": "GPIO On or Off",
  "helpUrl": ""
},
{
  "type": "toggle_gpio",
  "message0": "Toggle GPIO pin %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gpio_choice",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 150,
  "tooltip": "Toggle the value of GPIO pin",
  "helpUrl": ""
},
{
  "type": "gpio_state_listener",
  "message0": "If the state of GPIO pin %1 changes %2 do %3",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "gpio_choice",
      "options": [
        [
          "0",
          "0"
        ],
        [
          "1",
          "1"
        ],
        [
          "2",
          "2"
        ],
        [
          "3",
          "3"
        ],
        [
          "4",
          "4"
        ],
        [
          "5",
          "5"
        ],
        [
          "6",
          "6"
        ],
        [
          "7",
          "7"
        ],
        [
          "8",
          "8"
        ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 150,
  "tooltip": "Do something when the input changes (eg: a button is pressed)",
  "helpUrl": ""
},
{
  "type": "timer_wait",
  "message0": "Wait %1 Seconds",
  "args0": [
    {
      "type": "field_number",
      "name": "wait_val",
      "value": 0,
      "min": 0,
      "max": 300
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 345,
  "tooltip": "Wait for specified seconds",
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
