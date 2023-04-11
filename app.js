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

function addLoan(loanName, principle, interestRate, tenure) {
  const loan = {
    loanName: loanName,
    principle: principle,
    interestRate: interestRate,
    tenure: tenure
  };
  loans.push(loan);
  renderLoans();
}

loanForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // get input values
  const loanNameInput = document.querySelector("#loanName");
  const principleInput = document.querySelector("#principle");
  const interestRateInput = document.querySelector("#interestRate");
  const tenureInput = document.querySelector("#tenure");
  const loanName = loanNameInput.value;
  const principle = parseFloat(principleInput.value);
  const interestRate = parseFloat(interestRateInput.value);
  const tenure = parseFloat(tenureInput.value);

  // add loan to array and clear form
  addLoan(loanName, principle, interestRate, tenure);
  loanForm.reset();
});
