const principalInput = document.getElementById("principal");
const interestInput = document.getElementById("interest");

// Add dollar sign to the principal input
principalInput.addEventListener("input", function (e) {
  // Get the value of the input field
  let principal = principalInput.value;
  // Remove non-numeric characters from the input
  principal = principal.replace(/[^0-9.]/g, "");
  // Convert the input to a number
  principal = Number(principal);
  // Format the input with commas for thousands
  principal = principal.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 0 });
  // Update the input field with the formatted value
  principalInput.value = principal;
});

// Add percent sign to the interest input
interestInput.addEventListener("input", function (e) {
  // Get the value of the input field
  let interest = interestInput.value;
  // Remove non-numeric characters from the input
  interest = interest.replace(/[^0-9.]/g, "");
  // Convert the input to a number
  interest = Number(interest);
  // Format the input as a percentage
  interest = interest.toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 });
  // Update the input field with the formatted value
  interestInput.value = interest;
});

// Calculate the monthly payment and display it on the page
function handleFormSubmission() {
  const principal = Number(principalInput.value.replace(/[^0-9.]/g, ""));
  const interest = Number(interestInput.value.replace(/[^0-9.]/g, ""));
  const tenure = Number(document.getElementById("tenure").value);
  const monthlyInterestRate = interest / 100 / 12;
  const totalPayments = tenure * 12;
  const discountFactor =
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments));
  const monthlyPayment = principal / discountFactor;
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Monthly payment: " + monthlyPayment.toFixed(2);
}
