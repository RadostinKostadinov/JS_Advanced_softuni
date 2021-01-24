function calc() {
  const num1 = Number(document.getElementById('num1').value);
  const num2 = Number(document.getElementById('num2').value);
  const sum = document.getElementById('sum');

  sum.value = num1 + num2;
}
