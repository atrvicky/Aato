let sendGET = (code) => {
  code = code.replace(/ /g, '%20')
  code = code.replace(/\n/g, '&')
  let root = 'http://192.168.4.1/?';
  code = root + code + '?/';
  console.log(code);
  $.get(code);
};

Blockly.Python['csl_led_toggle'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.toggleLED' + dropdown_name +'()\r\n';
  return code;
};

Blockly.Python['on_start'] = function(block) {
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let code = statements_name +'\r\n';
  return code;
};

Blockly.Python['forever'] = function(block) {
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let code = 'while True:\r\n' + statements_name;
  return code;
};

Blockly.Python['led_on'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  let number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.enableLED' + dropdown_led_choice + '(lux=' + mapDutyToVal(number_led_lux) +')\r\n';
  return code;
};

Blockly.Python['led_all_on'] = function(block) {
  let number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.enableAll' + '(lux=' + mapDutyToVal(number_led_lux) +')\r\n';
  return code;
};

Blockly.Python['led_off'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.disableLED' + dropdown_led_choice +'()\r\n';
  return code;
};

Blockly.Python['led_all_off'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'pwm.disableAll()\r\n';
  return code;
};

Blockly.Python['led_blink'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  let number_led_lux = block.getFieldValue('led_lux');
  let number_led_time = block.getFieldValue('led_time');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.blink(' + dropdown_led_choice + ', lux=' + mapDutyToVal(number_led_lux) + ', dur=' + number_led_time +')\r\n';
  return code;
};

Blockly.Python['led_fade'] = function(block) {
  let dropdown_led_choice = block.getFieldValue('led_choice');
  let number_led_lux = block.getFieldValue('led_lux');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.fade(' + dropdown_led_choice + ', lux=' + mapDutyToVal(number_led_lux) +')\r\n';
  return code;
};

Blockly.Python['run_motor'] = function(block) {
  let dropdown_motor_choice = block.getFieldValue('motor_choice');
  let number_motor_speed = block.getFieldValue('motor_speed');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.runMotor(' + dropdown_motor_choice + ', value=' + mapDutyToVal(number_motor_speed) +')\r\n';
  return code;
};

Blockly.Python['brake_motor'] = function(block) {
  let dropdown_motor_choice = block.getFieldValue('motor_choice');
  // TODO: Assemble Python into code variable.
  let code = 'pwm.brakeMotor(' + dropdown_motor_choice +')\r\n';
  return code;
};

Blockly.Python['brake_all_motor'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'pwm.brakeAllMotors()\r\n';
  return code;
};

Blockly.Python['read_ir'] = function(block) {
  let dropdown_ir_choice = block.getFieldValue('ir_choice');
  // TODO: Assemble Python into code variable.
  let code = 'sensors.readIR' + dropdown_ir_choice + '()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_gpio'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'gpio.readPin(' + dropdown_gpio_choice +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['read_gpio_pup'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'gpio.readPinPUP(' + dropdown_gpio_choice +')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['write_gpio'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  let value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = 'gpio.writePin(' + dropdown_gpio_choice + ',' + value_name +')\r\n';
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
  let code = 'gpio.togglePin('+ dropdown_gpio_choice +')\r\n';
  return code;
};

Blockly.Python['gpio_state_listener'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  // let listener = "from machine import Pin as pin\r\n\r\n";
  let listener = "";
  listener += 'def pin' + dropdown_gpio_choice + "Listener(pin):\r\n"
  listener += statements_name;
  listener += "\r\n";
  let code = 'gpio.pinStateListener(' + dropdown_gpio_choice + ', _listener=pin' + dropdown_gpio_choice + 'Listener)\r\n';
  return listener + code;
};

Blockly.Python['timer_wait'] = function(block) {
  let number_wait_val = block.getFieldValue('wait_val');
  // TODO: Assemble Python into code variable.
  let code = 'utime.sleep(' + number_wait_val + ')\r\n';
  return code;
};

let mapDutyToVal = (val) => {
  return Math.ceil((val)/(100) * (4095))
};

Blockly.Python['lcd_home'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'sensors.home()\r\n';
  return code;
};

Blockly.Python['lcd_clear'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'sensors.clear()\r\n';
  return code;
};

Blockly.Python['lcd_set'] = function(block) {
  let number_lcd_row = block.getFieldValue('lcd_row');
  let number_lcd_col = block.getFieldValue('lcd_col');
  // TODO: Assemble Python into code variable.
  
  // adjust for zero-index
  number_lcd_col -= 1;
  number_lcd_row -= 1;

  let code = 'sensors.set_cursor(' + number_lcd_col + ', ' + number_lcd_row + ')\r\n';
  return code;
};

Blockly.Python['lcd_display'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = 'sensors.enable_display(' + dropdown_name + ')\r\n';
  return code;
};

Blockly.Python['lcd_cursor'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = 'sensors.show_cursor(' + dropdown_name + ')\r\n';
  return code;
};

Blockly.Python['lcd_blink'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = 'sensors.blink(' + dropdown_name + ')\r\n';
  return code;
};

Blockly.Python['lcd_move_left'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'sensors.move_left()\r\n';
  return code;
};

Blockly.Python['lcd_move_right'] = function(block) {
  // TODO: Assemble Python into code variable.
  let code = 'sensors.move_right()\r\n';
  return code;
};

Blockly.Python['lcd_rtl'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = '';
  if (dropdown_name == "ltr"){
    code = 'sensors.set_left_to_right()\r\n';
  } else if (dropdown_name == "rtl"){
    code = 'sensors.set_right_to_left()\r\n';
  }
  return code;
};

Blockly.Python['lcd_autoscroll'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  let number_scrollspeed = block.getFieldValue('scrollSpeed');
  // TODO: Assemble Python into code variable.
  let dely = map_range(number_scrollspeed, 0, 100, 250, 0);
  let code = 'sensors.autoscroll(ascrl=' + dropdown_name + ', scrlDelay=' + dely  + ')\r\n';
  return code;
};

Blockly.Python['lcd_brightness'] = function(block) {
  let number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let brightness = map_range(number_name, 0, 100, 4095, 0);
  let code = 'pwm.setLCDBrightness(' + brightness + ')\r\n';
  return code;
};

Blockly.Python['lcd_backlight'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = 'sensors.set_backlight(' + dropdown_name + ')\r\n';
  return code;
};

Blockly.Python['lcd_write'] = function(block) {
  let value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = 'sensors.message(' + value_name + ')\r\n';
  return code;
};

Blockly.Python['lcd_type'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble JavaScript into code variable.
  let code = 'sensors.set1604(' + dropdown_name + ')\r\n';
  return code;
};

Blockly.Python['servo_angle'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  let value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = 'gpio.run_servo(' + dropdown_gpio_choice + ', angle=' + value_name +')\r\n';
  return code;
};

Blockly.Python['servo_get_angle'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'gpio.run_servo(' + dropdown_gpio_choice + ')\r\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['servo_release'] = function(block) {
  let dropdown_gpio_choice = block.getFieldValue('gpio_choice');
  // TODO: Assemble Python into code variable.
  let code = 'gpio.release_servo(' + dropdown_gpio_choice + ')\r\n';
  return code;
};

Blockly.Python['js_indicator'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // can be either 'indicator_a' or 'indicator_b'

  let dropdown_status = block.getFieldValue('STATUS');
  // can be either 'True' or 'False'

  // TODO: Assemble Python into code variable.
  let code = '...';
  return code;
};

Blockly.Python['js_toggle'] = function(block) {

  let toggle_a = document.getElementById('toggle-a');
  let toggle_b = document.getElementById('toggle-b');

  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['js_toggle_statement'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = statements_name;
  return code;
};

Blockly.Python['js_button'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  let code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['js_button_statement'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let code = statements_name;
  return code;
};

Blockly.Python['js_nipple_statement'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  let dropdown_status = block.getFieldValue('STATUS');
  let statements_name = Blockly.Python.statementToCode(block, 'NAME');
  // TODO: Assemble Python into code variable.
  let code = statements_name;
  return code;
};

Blockly.Python['js_nipple_value'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  let dropdown_value = block.getFieldValue('VALUE');
  // TODO: Assemble Python into code variable.
  let code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['js_indicator_value'] = function(block) {
  let dropdown_name = block.getFieldValue('NAME');
  let value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  let code = '...\n';
  return code;
};

Blockly.Python['dog_direction'] = function(block) {
  var dropdown_status = block.getFieldValue('STATUS');
  var number_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = '';
  switch (dropdown_status){
    case 'f':
      code = 'dog.forward(' + number_name +')\n';
      break;
    case 'b':
      code = 'dog.backward(' + number_name +')\n';
      break;
    case 'l':
      code = 'dog.left(' + number_name +')\n';
      break;
    case 'r':
      code = 'dog.right(' + number_name +')\n';
      break;
  }
  return code;
};

Blockly.Python['dog_stance'] = function(block) {
  var dropdown_status = block.getFieldValue('STATUS');
  // TODO: Assemble Python into code variable.
  var code = 'dog.stance(' + dropdown_status + ')\n';
  return code;
};

Blockly.Python['dog_stand'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'dog.stand()\n';
  return code;
};

Blockly.Python['dog_sit'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'dog.sit()\n';
  return code;
};

function map_range(value, in_low, in_high, out_low, out_high) {
  return Math.ceil(out_low + (out_high - out_low) * (value - in_low) / (in_high - in_low));
}