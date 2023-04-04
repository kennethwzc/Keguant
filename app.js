function handleFormSubmission() {
  const principalInput = document.getElementById("principal");
  const interestInput = document.getElementById("interest");
  const tenureInput = document.getElementById("tenure");
  const resultElement = document.getElementById("result");

  const principal = parseFloat(principalInput.value.replace(/[^0-9\.]/g, ""));
  const interest = parseFloat(interestInput.value);
  const tenure = parseInt(tenureInput.value);

  if (isNaN(principal) || isNaN(interest) || isNaN(tenure)) {
    resultElement.textContent = "Please fill all the fields with valid values.";
    return;
  }

  const monthlyInterest = interest / 100 / 12;
  const totalPayments = tenure * 12;
  const monthlyPayment = (principal * monthlyInterest) / (1 - (1 / (1 + monthlyInterest) ** totalPayments));

  resultElement.textContent = `Your monthly payment is $${addCommas(monthlyPayment.toFixed(2))}.`;
}

function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

const principalInput = document.getElementById("principal");

principalInput.addEventListener("input", function(e) {
  let value = parseFloat(this.value.replace(/[^0-9\.]/g, ""));
  if (isNaN(value)) {
    value = "";
  } else {
    value = addCommas(value.toString());
  }
  this.value = "$" + value;
});
