function calculateMonthlyPayment(principal, interest, tenure) {
  const interestRate = interest / (12 * 100);
  const loanTenure = tenure * 12;
  const monthlyPayment = (principal * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `$${monthlyPayment.toFixed(2)}`;
}

function handleFormSubmission() {
  const principal = document.getElementById('principal').value;
  const interest = document.getElementById('interest').value;
  const tenure = document.getElementById('tenure').value;
  calculateMonthlyPayment(principal, interest, tenure);
}
