// for featured buttons---------------

function showSectionById(id) {
  document.getElementById("donation-historia").style.display = "none";
  document.getElementById("card").style.display = "none";

  document.getElementById(id).style.display = "block";
}

// get input value----------
function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputNumber = parseFloat(inputValue);
  return inputNumber;
}

// for transaction text value-------

function getInputTextValueById(id) {
  const accountInput = document.getElementById(id).innerText;
  const accountBalance = parseFloat(accountInput);
  return accountBalance;
}
