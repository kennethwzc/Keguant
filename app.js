// Function to calculate monthly payment
function calculateMonthlyPayment(principal, interest, tenure) {
  const interestRate = interest / (12 * 100);
  const loanTenure = tenure * 12;
  const monthlyPayment = (principal * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `$${monthlyPayment.toFixed(2)}`;
}

// Function to add loan to table
function addLoanToTable(principal, interest, tenure) {
  const table = document.getElementById("loan-table");
  const newRow = table.insertRow(-1);
  const principalCell = newRow.insertCell(0);
  const interestCell = newRow.insertCell(1);
  const tenureCell = newRow.insertCell(2);
  const paymentCell = newRow.insertCell(3);
  
  principalCell.innerHTML = `$${principal}`;
  interestCell.innerHTML = `${interest}%`;
  tenureCell.innerHTML = `${tenure} years`;
  
  const interestRate = interest / (12 * 100);
  const loanTenure = tenure * 12;
  const monthlyPayment = (principal * interestRate * (Math.pow(1 + interestRate, loanTenure))) / (Math.pow(1 + interestRate, loanTenure) - 1);
  paymentCell.innerHTML = `$${monthlyPayment.toFixed(2)}`;
}

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent form from refreshing the page
  const principal = document.getElementById('principal').value;
  const interest = document.getElementById('interest').value;
  const tenure = document.getElementById('tenure').value;
  
  calculateMonthlyPayment(principal, interest, tenure);
  addLoanToTable(principal, interest, tenure);
  document.getElementById("loan-form-wrapper").classList.add("hidden"); // Hide the form after submission
}

const addLoanButton = document.getElementById("add-loan-button");
const loanFormWrapper = document.getElementById("loan-form-wrapper");

addLoanButton.addEventListener("click", function() {
  loanFormWrapper.classList.remove("hidden");
});

const loanForm = document.getElementById("loan-form");
loanForm.addEventListener("submit", handleFormSubmission);
