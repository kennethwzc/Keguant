const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");

principalInput.addEventListener("input", addCommas);

function addCommas(event) {
  const input = event.target;
  const plainValue = input.value.replace(/[^0-9]/g, "");
  const formattedValue = new Intl.NumberFormat().format(plainValue);
  input.value = formattedValue ? "$" + formattedValue : "";
}

interestInput.addEventListener("input", addPercent);

function addPercent(event) {
  const input = event.target;
  const plainValue = input.value.replace(/[^0-9\.]/g, "");
  const formattedValue = plainValue ? plainValue + "%" : "";
  input.value = formattedValue;
}

function calculateMonthlyPayment(principal, interestRate, tenure) {
  const monthlyInterestRate = interestRate / 1200;
  const numberOfPayments = tenure * 12;
  const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  return monthlyPayment.toFixed(2);
}

function handleFormSubmission() {
  const principal = parseFloat(principalInput.value.replace(/[^0-9\.]/g, ""));
  const interestRate = parseFloat(interestInput.value.replace(/[^0-9\.]/g, ""));
  const tenure = parseFloat(document.getElementById("tenure").value);
  const monthlyPayment = calculateMonthlyPayment(principal, interestRate, tenure);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Monthly payment: $${monthlyPayment}`;
}
