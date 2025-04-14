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

// Safe evaluate function
function safeEvaluate(expr) {
  // Allow only numbers, operators and parentheses
  if (!/^[0-9+\-*/().\s]+$/.test(expr)) {
    throw new Error("Invalid characters in expression");
  }

  // Use Function constructor for safer evaluation
  // This only evaluates expressions (not arbitrary code)
  // and avoids access to the wider scope
  const func = new Function(`return (${expr})`);
  return func();
}