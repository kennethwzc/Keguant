const principalInput = document.getElementById('principal');
const interestInput = document.getElementById('interest');
const tenureInput = document.getElementById('tenure');

// Function to format number with commas for every 3 digits
function addCommas(num) {
  const numStr = num.toString();
  const numParts = numStr.split('.');
  numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numParts.join('.');
}

// Add $ to principal input and add commas for every 3 digits
principalInput.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  value = addCommas(value);
  e.target.value = '$' + value;
});

// Remove $ and commas from principal input on form submission
principalInput.closest('form').addEventListener('submit', function() {
  principalInput.value = principalInput.value.replace(/[$,]/g, '');
});

// Add % to interest input
interestInput.addEventListener('input', function(e) {
  let value = e.target.value.replace(/\D/g, '');
  value += '%';
  e.target.value = value;
});

// Remove % from interest input on form submission
interestInput.closest('form').addEventListener('submit', function() {
  interestInput.value = interestInput.value.replace('%', '');
});

function calculateMonthlyPayment() {
  const principal = parseFloat(principalInput.value.replace(/[$,]/g, ''));
  const interestRate = parseFloat(interestInput.value.replace('%', '')) / 100 / 12;
  const tenure = parseFloat(tenureInput.value);
  
  const monthlyPayment = (principal * interestRate * Math.pow(1 + interestRate, tenure * 12)) /
    (Math.pow(1 + interestRate, tenure * 12) - 1);
    
  const resultElement = document.getElementById('result');
  resultElement.textContent = `Your monthly payment is $${monthlyPayment.toFixed(2)}.`;
}

function handleFormSubmission() {
  event.preventDefault();
  calculateMonthlyPayment();
}
