const LoanCalculator = (() => {
  const principalInput = document.getElementById("principal");
  const interestInput = document.getElementById("interest");
  const resultElement = document.getElementById("result");
  const tenure = document.getElementById("tenure");

  function formatPrincipalValue(value) {
    const formattedValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `$${formattedValue}`;
  }

  function formatInterestValue(value) {
    const formattedValue = value.replace(/(?!\d|%)/g, "");
    return formattedValue ? `${formattedValue}%` : "";
  }

  function handlePrincipalInput() {
    const value = principalInput.value.replace(/\D/g, "");
    principalInput.value = formatPrincipalValue(value);
  }

  function handleInterestInput() {
    const value = interestInput.value.replace(/(?!\d|%)/g, "");
    interestInput.value = formatInterestValue(value);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const principal = parseFloat(principalInput.value.replace(/[^0-9.-]+/g,""));
    const interest = parseFloat(interestInput.value.replace(/[^0-9.-]+/g,"")) / 100;
    const numberOfPayments = tenure.value * 12;
    const monthlyInterestRate = interest / 12;

    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    resultElement.textContent = `$${monthlyPayment.toFixed(2)} per month`;
  }

  function init() {
    principalInput.addEventListener("input", handlePrincipalInput);
    interestInput.addEventListener("input", handleInterestInput);
    const formElement = document.getElementById("loan-form");
    formElement.addEventListener("submit", handleFormSubmission);
  }

  return { init };
})();

LoanCalculator.init();
