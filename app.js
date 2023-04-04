const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");

principalInput.addEventListener("input", () => {
  const value = principalInput.value.replace(/\D/g, "");
  const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  principalInput.value = `$${formattedValue}`;
});

interestInput.addEventListener("input", () => {
  const value = interestInput.value.replace(/\D/g, "");
  const formattedValue = value ? `${value}%` : "";
  interestInput.value = formattedValue;
});

function handleFormSubmission() {
  const principal = parseFloat(principalInput.value.replace(/[^0-9.-]+/g,""));
  const interest = parseFloat(interestInput.value.replace(/[^0-9.-]+/g,"")) / 100;
  const tenure = parseInt(document.getElementById("tenure").value);

  const monthlyInterestRate = interest / 12;
  const numberOfPayments = tenure * 12;

  const monthlyPayment =
    (principal *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
    (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

  const resultElement = document.getElementById("result");
  resultElement.textContent = `$${monthlyPayment.toFixed(2)} per month`;
}
