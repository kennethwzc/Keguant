const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");
const tenureInput = document.getElementById("tenure");
const form = document.querySelector("form");

// Add commas to loan principal input in real-time
principalInput.addEventListener("input", (event) => {
  const value = event.target.value;
  event.target.value = addCommas(value);
});

// Remove commas and dollar sign when submitting form
form.addEventListener("submit", (event) => {
  const principalValue = parseFloat(principalInput.value.replace(/,/g, "").replace(/\$/g, ""));
  const interestValue = parseFloat(interestInput.value.replace(/\%/g, ""));
  const tenureValue = parseFloat(tenureInput.value);

  calculateMonthlyPayment(principalValue, interestValue, tenureValue);

  event.preventDefault();
});

// Add percent sign to interest input when typing
interestInput.addEventListener("input", (event) => {
  event.target.value = event.target.value.replace(/[^0-9.]/g, "") + "%";
});

// Utility function to add commas to a number
function addCommas(num) {
  const str = num.toString();
  if (str.length <= 3) return str;
  const intPart = str.slice(0, -3);
  const decimalPart = str.slice(-3);
  return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + decimalPart;
}

function calculateMonthlyPayment(principal, interest, tenure) {
  const monthlyInterest = (interest / 12) / 100;
  const numberOfPayments = tenure * 12;
  const numerator = monthlyInterest * Math.pow((1 + monthlyInterest), numberOfPayments);
  const denominator = Math.pow((1 + monthlyInterest), numberOfPayments) - 1;
  const monthlyPayment = principal * (numerator / denominator);
  const resultElement = document.getElementById("result");
  resultElement.innerText = `Your monthly payment is $${monthlyPayment.toFixed(2)}`;
}
