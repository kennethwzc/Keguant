function calculateMonthlyPayment(principal, interest, tenure) {
  const monthlyPayment = (principal * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}

function handleFormSubmission() {
  const principal = document.getElementById('principal').value;
  const interest = document.getElementById('interest').value;
  const tenure = document.getElementById('tenure').value;
  calculateMonthlyPayment(principal, interest, tenure);
}
