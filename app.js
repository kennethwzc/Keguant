function displayFinalPayment(payment) {
  const finalPaymentElement = document.getElementById("final-payment");
  if (payment === undefined || isNaN(payment)) {
    finalPaymentElement.textContent = "Final Monthly Payment: $0.00";
  } else {
    finalPaymentElement.textContent = `Final Monthly Payment: $${payment.toFixed(2)}`;
  }
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
