Blockly.Python['csl_led_toggle'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = 'toggleLED1()\n';
  return code;
};

Blockly.Python['on_start'] = function(block) {
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let code = statements_name +'\n';
  return code;
};

Blockly.Python['forever'] = function(block) {
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let code = 'while True:\n' + statements_name;
  return code;
};

Blockly.Python['led_on'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  let number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  let code = 'enableLED' + dropdown_led_choice + '(lux=' + mapDutyToVal(number_led_lux) +')\n';
  return code;
};

Blockly.Python['led_all_on'] = function(block) {
  let number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  let code = 'enableAll' + '(lux=' + mapDutyToVal(number_led_lux) +')\n';
  return code;
};

Blockly.Python['led_off'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  // TODO: Assemble Python into code variable.
  let code = 'disableLED' + dropdown_led_choice +'()\n';
  return code;
};

Blockly.Python['led_all_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'disableAll()\n';
  return code;
};

Blockly.Python['led_blink'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  let number_led_lux = block.getFieldValue('led_lux');
  let number_led_time = block.getFieldValue('led_time');
  // TODO: Assemble Python into code variable.
  let code = 'blink(' + dropdown_led_choice + ', lux=' + mapDutyToVal(number_led_lux) + ', dur=' + number_led_time +')\n';
  return code;
};

Blockly.Python['led_fade'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  let number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  let code = 'fade(' + dropdown_led_choice + ', lux=' + mapDutyToVal(number_led_lux) +')\n';
  return code;
};

Blockly.Python['run_motor'] = function(block) {
  let dropdown_motor_choice = block.getFieldValue('motor_choice');
  let number_motor_speed = block.getFieldValue('motor_speed');
  // TODO: Assemble Python into code variable.
  let code = 'runMotor(' + dropdown_motor_choice + ', value=' + mapDutyToVal(number_motor_speed) +')\n';
  return code;
};

Blockly.Python['brake_motor'] = function(block) {
  let dropdown_motor_choice = block.getFieldValue('motor_choice');
  // TODO: Assemble Python into code variable.
  let code = 'brakeMotor(' + dropdown_motor_choice +')\n';
  return code;
};

Blockly.Python['brake_all_motor'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'brakeAllMotors()\n';
  return code;
};

Blockly.Python['read_ir'] = function(block) {
  let dropdown_ir_choice = block.getFieldValue('ir_choice');
  // TODO: Assemble Python into code variable.
  let code = 'readIR' + dropdown_ir_choice + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_gpio'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'readPin(' + dropdown_gpio_choice +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_gpio_pup'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'readPinPUP(' + dropdown_gpio_choice +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['write_gpio'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  let value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = 'writePin(' + dropdown_gpio_choice + ',' + value_name +')\n';
  return code;
};

Blockly.Python['gpio_on'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = dropdown_gpio_choice;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['toggle_gpio'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'togglePin('+ dropdown_gpio_choice +')\n';
  return code;
};

Blockly.Python['gpio_state_listener'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let listener = "from machine import Pin as pin\n\n";
  listener += 'def pin' + dropdown_gpio_choice + "Listener(pin):\n"
  listener += statements_name;
  listener += "\n";
  let code = 'pinStateListener(' + dropdown_gpio_choice + ', _listener=pin' + dropdown_gpio_choice + 'Listener)\n';
  return listener + code;
};

let mapDutyToVal = (val) => {
  return Math.ceil((val)/(100) * (4095))
};