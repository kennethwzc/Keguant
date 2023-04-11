function calculateMonthlyPayment(principal, interest, tenure) {
  const monthlyPayment = /* calculation */;
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
  return monthlyPayment;
}

function handleFormSubmission() {
  const principal = document.getElementById('principal').value;
  const interest = document.getElementById('interest').value;
  const tenure = document.getElementById('tenure').value;
  const monthlyPayment = calculateMonthlyPayment(principal, interest, tenure);
  displayResult(monthlyPayment);
}

function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Monthly payment: $${result.toFixed(2)}`;
}
