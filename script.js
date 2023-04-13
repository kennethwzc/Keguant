let rIndex;
const table = document.getElementById("table");

function selectedRowToInput() {
  for(let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      rIndex = this.rowIndex;
      document.getElementById("loan_name").value = this.cells[0].innerHTML;
      document.getElementById("loan_principle").value = this.cells[1].innerHTML;
      document.getElementById("loan_interest_rate").value = this.cells[2].innerHTML;
      document.getElementById("loan_tenure").value = this.cells[3].innerHTML;
    };
  }
}

function checkEmptyInput() {
  let isEmpty = false;
  const loan_name = document.getElementById("loan_name").value;
  const loan_principle = document.getElementById("loan_principle").value;
  const loan_interest_rate = document.getElementById("loan_interest_rate").value;
  const loan_tenure = document.getElementById("loan_tenure").value;

  if(loan_name === ""){
    alert("Loan name cannot be empty");
    isEmpty = true;
  } else if(loan_principle === ""){
    alert("Loan principle cannot be empty");
    isEmpty = true;
  } else if(loan_interest_rate === ""){
    alert("Loan interest rate cannot be empty");
    isEmpty = true;
  } else if(loan_tenure === ""){
    alert("Loan tenure cannot be empty");
    isEmpty = true;
  }
  return isEmpty;
}

function addHtmlTableRow() {
  if(!checkEmptyInput()) {
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const loan_name = document.getElementById("loan_name").value;
    const loan_principle = document.getElementById("loan_principle").value;
    const loan_interest_rate = document.getElementById("loan_interest_rate").value;
    const loan_tenure = document.getElementById("loan_tenure").value;

    cell1.innerHTML = loan_name;
    cell2.innerHTML = loan_principle;
    cell3.innerHTML = loan_interest_rate;
    cell4.innerHTML = loan_tenure;
    selectedRowToInput();
  }
}

function editHtmlTableSelectedRow() {
  const loan_name = document.getElementById("loan_name").value;
  const loan_principle = document.getElementById("loan_principle").value;
  const loan_interest_rate = document.getElementById("loan_interest_rate").value;
  const loan_tenure = document.getElementById("loan_tenure").value;
  if(!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = loan_name;
    table.rows[rIndex].cells[1].innerHTML = loan_principle;
    table.rows[rIndex].cells[2].innerHTML = loan_interest_rate;
    table.rows[rIndex].cells[3].innerHTML = loan_tenure;
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  document.getElementById("loan_name").value = "";
  document.getElementById("loan_principle").value = "";
  document.getElementById("loan_interest_rate").value = "";
  document.getElementById("loan_tenure").value = "";
}

selectedRowToInput();
