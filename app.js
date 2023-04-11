const loanForm = document.querySelector("#loanForm");
const loanTableBody = document.querySelector("#loanTableBody");

let loans = [];

function renderLoans() {
  loanTableBody.innerHTML = "";
  for (let i = 0; i < loans.length; i++) {
    const loan = loans[i];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${loan.loanName}</td>
      <td>$${loan.principle.toFixed(2)}</td>
      <td>${loan.interestRate.toFixed(2)}%</td>
      <td>${loan.tenure} years</td>
    `;
    loanTableBody.appendChild(row);
  }
}

loanForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const loanNameInput = document.querySelector("#loanName");
  const principleInput = document.querySelector("#principle");
  const interestRateInput = document.querySelector("#interestRate");
  const tenureInput = document
