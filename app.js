const principalInput = document.getElementById('principal');
const interestInput = document.getElementById('interest');

principalInput.addEventListener('input', function() {
  this.value = addCommas(this.value.replace(/\D/g, ''));
  this.value = '$' + this.value;
});

interestInput.addEventListener('input', function() {
  this.value = this.value.replace(/\D/g, '') + '%';
});

function addCommas(nStr) {
  nStr += '';
  const x = nStr.split('.');
  let x1 = x[0];
  const x2 = x.length > 1 ? '.' + x[1] : '';
  const rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

function calculateMonthlyPayment(principal, interestRate, tenure) {
  const monthlyInterestRate = interestRate / 100 / 12;
  const numberOfPayments = tenure * 12;
  const discountFactor = ((1 + monthlyInterestRate) ** numberOfPayments - 1) /
    (monthlyInterestRate * (1 + monthlyInterestRate) ** numberOfPayments);
  const monthlyPayment = principal / discountFactor;
  return monthlyPayment.toFixed(2);
}

function handleFormSubmission() {
  const principal = Number(principalInput.value.replace(/[^0-9\.]+/g,""));
  const interestRate = Number(interestInput.value.replace(/[^0-9\.]+/g,""));
  const tenure = Number(document.getElementById('tenure').value);
  const monthlyPayment = calculateMonthlyPayment(principal, interestRate, tenure);
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Monthly payment: $${monthlyPayment}`;
}
