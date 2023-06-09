let expression = '';
let decimalAdded = false;

function appendNumber(number) {
  expression += number;
  expressResult(expression);
}
function appendOperator(operator) {
  expression += operator;
  expressResult(expression);
  decimalAdded = false;
}

function appendDecimal() {
  if (!decimalAdded) {
    expression += '.';
  	expressResult(expression);
    decimalAdded = true;
  }
}

function clearResult() {
  expression = '';
  resultInput.val('');
  decimalAdded = false;
}

function calculate() {
  expression = eval(expression);
  expressResult(expression);
}