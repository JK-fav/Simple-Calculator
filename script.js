let display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculateResult() {
  try {
    display.value = safeEvaluate(display.value);
  } catch {
    display.value = 'Error';
  }
}

function safeEvaluate(expr) {
  // Allow only numbers, operators and parentheses
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    throw new Error("Invalid characters in expression");
  }
  const func = new Function(`return (${expr})`);
  return func();
}
