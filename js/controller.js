resultBTN.on("click", function(){
  calculate();
});
numberBTN.on("click", function(){
  let number = $(this).text()
  appendNumber(Number(number));
});
decimalBTN.on("click", function(){
  appendDecimal();
});
operatorBTN.on("click", function(){
  let operator = $(this).text()
  appendOperator(operator);
});
clearBTN.on("click", function(){
  clearResult();
});
