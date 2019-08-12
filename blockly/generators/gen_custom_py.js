Blockly.Python['csl_led_toggle'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['on_start'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['forever'] = function(block) {
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['led_on'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  var number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['led_all_on'] = function(block) {
  var number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['led_off'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['led_all_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['led_blink'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  var number_led_lux = block.getFieldValue('led_lux');
  var number_led_time = block.getFieldValue('led_time');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['led_fade'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  var number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['run_motor'] = function(block) {
  var dropdown_motor_choice = block.getFieldValue('motor_choice');
  var number_motor_speed = block.getFieldValue('motor_speed');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['brake_motor'] = function(block) {
  var dropdown_motor_choice = block.getFieldValue('motor_choice');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['brake_all_motor'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['read_ir'] = function(block) {
  var dropdown_ir_choice = block.getFieldValue('ir_choice');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_gpio'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_gpio_pup'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['write_gpio'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['gpio_on'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['toggle_gpio'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['gpio_state_listener'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};