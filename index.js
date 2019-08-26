function calculate() {
  var inputA = document.getElementById("A"),
    inputB = document.getElementById("B"),
    inputC = document.getElementById("C"),
    A = parseFloat(inputA.value),
    B = parseFloat(inputB.value);
  inputC.value = (A + B).toFixed(2);
}
