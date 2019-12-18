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
},
{
  "type": "lcd_home",
  "message0": "Go to LCD home position",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Go to position (0,0)",
  "helpUrl": ""
},
{
  "type": "lcd_clear",
  "message0": "Clear Screen",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Clear the screen",
  "helpUrl": ""
},
{
  "type": "lcd_set",
  "message0": "Set cursor to row %1 and column %2",
  "args0": [
    {
      "type": "field_number",
      "name": "lcd_row",
      "value": 0,
      "min": 0,
      "max": 4,
      "precision": 1
    },
    {
      "type": "field_number",
      "name": "lcd_col",
      "value": 0,
      "min": 0,
      "max": 16,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Set cursor position",
  "helpUrl": ""
},
{
  "type": "lcd_display",
  "message0": "LCD %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "On",
          "True"
        ],
        [
          "Off",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Enable or disable LCD",
  "helpUrl": ""
},
{
  "type": "lcd_cursor",
  "message0": "Cursor %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "On",
          "True"
        ],
        [
          "Off",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Enable or disable cursor",
  "helpUrl": ""
},
{
  "type": "lcd_blink",
  "message0": "Blink Cursor %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "On",
          "True"
        ],
        [
          "Off",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Enable or disable cursor blink",
  "helpUrl": ""
},
{
  "type": "lcd_move_left",
  "message0": "Move Left",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Moves the cursor one pixel left.",
  "helpUrl": ""
},
{
  "type": "lcd_move_right",
  "message0": "Move Right",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Moves the cursor one pixel right",
  "helpUrl": ""
},
{
  "type": "lcd_rtl",
  "message0": "Display mode %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "LTR",
          "ltr"
        ],
        [
          "RTL",
          "rtl"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "LTR or RTL display mode",
  "helpUrl": ""
},
{
  "type": "lcd_autoscroll",
  "message0": "Autoscroll %1 scroll speed %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "On",
          "True"
        ],
        [
          "Off",
          "False"
        ]
      ]
    },
    {
      "type": "field_number",
      "name": "scrollSpeed",
      "value": 100,
      "min": 0,
      "max": 100,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Enable or disable autoscroll",
  "helpUrl": ""
},
{
  "type": "lcd_brightness",
  "message0": "Contrast %1",
  "args0": [
    {
      "type": "field_number",
      "name": "NAME",
      "value": 100,
      "min": 0,
      "max": 100,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Set screen contrast",
  "helpUrl": ""
},
{
  "type": "lcd_backlight",
  "message0": "Backlight %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "On",
          "True"
        ],
        [
          "Off",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Enable or disable backlight",
  "helpUrl": ""
},
{
  "type": "lcd_write",
  "message0": "Print %1",
  "args0": [
    {
      "type": "input_value",
      "name": "NAME",
      "check": [
        "Boolean",
        "Number",
        "String"
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Print to screen",
  "helpUrl": ""
},
{
  "type": "lcd_type",
  "message0": "Set LCD type %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "16x2",
          "False"
        ],
        [
          "16x4",
          "True"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 30,
  "tooltip": "Set 16x2 or 16x4 LCD",
  "helpUrl": ""
},
{
  "type": "servo_angle",
  "message0": "Set servo in Pin %1 to angle %2",
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
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 265,
  "tooltip": "Turn the servo motor to specified angle",
  "helpUrl": ""
},
{
  "type": "servo_get_angle",
  "message0": "Get servoAngle %1",
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
  "output": "Number",
  "colour": 265,
  "tooltip": "Get the angle for the specified servo",
  "helpUrl": ""
},
{
  "type": "servo_release",
  "message0": "Release servo %1",
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
  "colour": 265,
  "tooltip": "Release the servo motor",
  "helpUrl": ""
},
{
  "type": "js_indicator",
  "message0": "Indicator %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "A",
          "indicator_a"
        ],
        [
          "B",
          "indicator_b"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "STATUS",
      "options": [
        [
          "On",
          "True"
        ],
        [
          "Off",
          "False"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Control the status of the virtual indicators",
  "helpUrl": ""
},
{
  "type": "js_toggle",
  "message0": "Toggle Switch %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "A",
          "toggle_a"
        ],
        [
          "B",
          "toggle_b"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 300,
  "tooltip": "Check the status of the virtual toggle switch",
  "helpUrl": ""
},
{
  "type": "js_button",
  "message0": "Button %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "A",
          "button_a"
        ],
        [
          "B",
          "button_b"
        ],
        [
          "C",
          "button_c"
        ],
        [
          "D",
          "button_d"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 300,
  "tooltip": "Check the status of the virtual button",
  "helpUrl": ""
},
{
  "type": "js_button_statement",
  "message0": "Press button %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "A",
          "button_a"
        ],
        [
          "B",
          "button_b"
        ],
        [
          "C",
          "button_c"
        ],
        [
          "D",
          "button_d"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 300,
  "tooltip": "Do something when a virtual button is pressed",
  "helpUrl": ""
},
{
  "type": "js_nipple_statement",
  "message0": "Move gamepad %1 %2 %3 %4",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Left",
          "js_a"
        ],
        [
          "Right",
          "js_b"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "STATUS",
      "options": [
        [
          "forward",
          "fw"
        ],
        [
          "backward",
          "bw"
        ],
        [
          "left",
          "l"
        ],
        [
          "right",
          "r"
        ],
        [
          "At rest",
          "rst"
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
  "colour": 300,
  "tooltip": "Do something when a virtual gamepad is used",
  "helpUrl": ""
},
{
  "type": "js_nipple_value",
  "message0": "%1 gamepad  %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "Left",
          "js_a"
        ],
        [
          "Right",
          "js_b"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "VALUE",
      "options": [
        [
          "X",
          "js_x"
        ],
        [
          "Y",
          "js_y"
        ]
      ]
    }
  ],
  "output": "Number",
  "colour": 300,
  "tooltip": "Get the position of the virtual gamepad",
  "helpUrl": ""
},
{
  "type": "js_indicator_value",
  "message0": "Indicator %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "A",
          "indicator_a"
        ],
        [
          "B",
          "indicator_b"
        ]
      ]
    },
    {
      "type": "input_value",
      "name": "NAME",
      "check": "Boolean"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 300,
  "tooltip": "Control the status of the virtual indicators",
  "helpUrl": ""
},
{
  "type": "js_toggle_statement",
  "message0": "On Changing Toggle Switch %1 %2 %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
        [
          "A",
          "toggle_a"
        ],
        [
          "B",
          "toggle_b"
        ]
      ]
    },
    {
      "type": "input_statement",
      "name": "NAME"
    }
  ],
  "colour": 300,
  "tooltip": "Runs the blocks inside it when the toggle switch is toggled",
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
