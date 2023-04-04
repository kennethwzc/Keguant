/**
 * Calculates the monthly payment and total interest payable for a loan.
 * @param {number} principal - The principal amount of the loan.
 * @param {number} interestRate - The annual interest rate of the loan as a percentage.
 * @param {number} loanTenure - The tenure of the loan in years.
 * @returns {Object} - An object containing the monthly payment and total interest payable.
 */
function calculateLoanDetails(principal, interestRate, loanTenure) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalNumberOfPayments = loanTenure * 12;
  const monthlyPayment =
    (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalNumberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalNumberOfPayments) - 1);
  const totalPayment = monthlyPayment * totalNumberOfPayments;
  const totalInterest = totalPayment - principal;

  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    totalInterestPayable: totalInterest.toFixed(2)
  };
}

/**
 * Handles form submission and displays the loan details.
 */
function handleFormSubmission() {
  const principal = parseFloat(document.getElementById('principal').value);
  const interestRate = parseFloat(document.getElementById('interest').value);
  const loanTenure = parseFloat(document.getElementById('tenure').value);

  const loanDetails = calculateLoanDetails(principal, interestRate, loanTenure);

  document.getElementById('result').innerHTML = `
    Monthly payment: $${loanDetails.monthlyPayment}<br>
    Total interest payable: $${loanDetails.totalInterestPayable}
  `;
}
