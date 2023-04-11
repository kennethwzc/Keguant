window.addEventListener('load', () => {
  const finalPaymentElement = document.getElementById('final-payment');
  finalPaymentElement.setAttribute('placeholder', '$0.00');
});

function calculateMonthlyPayment(principal, interest, tenure) {
  // Implementation of the calculateMonthlyPayment function
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
  resultElement.innerHTML = `Monthly payment: $${result.toFixed(2)}`;
  
  const finalPaymentElement = document.getElementById('final-payment');
  finalPaymentElement.setAttribute('placeholder', '$0.00');
}
