Blockly.JavaScript['csl_led_toggle'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['on_start'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['forever'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['led_on'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  var number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['led_all_on'] = function(block) {
  var number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['led_off'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['led_all_off'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['led_blink'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  var number_led_lux = block.getFieldValue('led_lux');
  var number_led_time = block.getFieldValue('led_time');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['led_fade'] = function(block) {
  var dropdown_led_choice = block.getFieldValue('led_choice');
  var number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['run_motor'] = function(block) {
  var dropdown_motor_choice = block.getFieldValue('motor_choice');
  var number_motor_speed = block.getFieldValue('motor_speed');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['brake_motor'] = function(block) {
  var dropdown_motor_choice = block.getFieldValue('motor_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['brake_all_motor'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['read_ir'] = function(block) {
  var dropdown_ir_choice = block.getFieldValue('ir_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['read_gpio'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['read_gpio_pup'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['write_gpio'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['gpio_on'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['toggle_gpio'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['gpio_state_listener'] = function(block) {
  var dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};