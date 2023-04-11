function displayResult(result) {
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Monthly payment: $${result.toFixed(2)}`;
}

function handleFormSubmission() {
  const principal = parseFloat(document.getElementById("principal").value);
  const interestRate = parseFloat(document.getElementById("interest").value) / 100 / 12;
  const loanTenure = parseInt(document.getElementById("tenure").value) * 12;

  const monthlyPayment = (principal * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);

  const resultElement = document.getElementById("result");
  resultElement.textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;

  displayFinalPayment(monthlyPayment);
}
