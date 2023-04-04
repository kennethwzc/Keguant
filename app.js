function calculateMonthlyPayment() {
  const principal = parseFloat(document.getElementById('principal').value);
  const interestRate = parseFloat(document.getElementById('interest').value) / 100 / 12;
  const loanTenure = parseFloat(document.getElementById('tenure').value) * 12;
  const monthlyPayment =
    (principal * interestRate * Math.pow(1 + interestRate, loanTenure)) /
    (Math.pow(1 + interestRate, loanTenure) - 1);

  document.getElementById('result').textContent = `Monthly payment: $${monthlyPayment.toFixed(2)}`;
}
