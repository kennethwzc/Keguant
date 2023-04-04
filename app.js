function handleFormSubmission() {
  const principalInput = document.getElementById("principal");
  const interestInput = document.getElementById("interest");
  const tenureInput = document.getElementById("tenure");
  const result = document.getElementById("result");
  
  const principal = parseInt(principalInput.value.replace(/\$|,/g, ""));
  const interest = parseFloat(interestInput.value);
  const tenure = parseInt(tenureInput.value);
  
  const monthlyInterestRate = interest / 1200;
  const totalPayments = tenure * 12;
  const discountFactor = (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) / (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
  const monthlyPayment = (principal / discountFactor).toFixed(2);
  
  result.innerText = `Monthly payment: $${formatNumberWithCommas(monthlyPayment)}`;
}

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const principalInput = document.getElementById("principal");
principalInput.addEventListener("input", function() {
  this.value = formatNumberWithCommas(this.value.replace(/\$|,/g, ""));
});
