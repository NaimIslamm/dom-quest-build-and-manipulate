// for scrolling js--
let scrollpos = window.scrollY;
const header = document.querySelector("nav");
const header_height = header.offsetHeight;

const add_class_on_scroll = () => header.classList.add("fade-in");
const remove_class_on_scroll = () => header.classList.remove("fade-in");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= header_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }

  console.log(scrollpos);
});

// history page event listener--------

document
  .getElementById("history-button")
  .addEventListener("click", function () {
    showSectionById("donation-historia");
  });
document
  .getElementById("donation-button")
  .addEventListener("click", function () {
    showSectionById("card");
  });

//end history page event listener--------

// donate money task-----
// start for flood at noakhali --1st card----------------
document
  .getElementById("donate-button-1")
  .addEventListener("click", function () {
    const inputBalance = getInputValueById("input-balance");
    // some validation--------
    if (inputBalance < 0) {
      alert("Invalid Amount");
      return;
    }
    if (inputBalance) {
      alert("Added Your Money");
    }
    if (isNaN(inputBalance)) {
      alert("Invalid Amount");
      return;
    }
    // some validation--------
    const addedMoney = getInputTextValueById("added-money");
    const myBalanced = getInputTextValueById("my-balance");
    const newBalance = inputBalance + addedMoney;
    if (myBalanced > inputBalance) {
      const cutBalance = myBalanced - inputBalance;
      document.getElementById("my-balance").innerText = cutBalance;
    } else {
      alert("not Enought Money");
      return;
    }

    document.getElementById("added-money").innerText = newBalance;

    const div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "1px solid #f0f0f0";
    div.style.fontSize = "25px 20px";
    div.style.fontWeight = "700";

    div.innerHTML = `<p>${inputBalance}Taka is Donated for famine-2024 at Feni, Bangladesh</p>`;

    document.getElementById("added-container").appendChild(div);
    // for clear the input field
    document.getElementById("input-balance").value = "";
  });
// End for flood at noakhali--1st card----------------

// start for feni--2nd card--------------

document
  .getElementById("donate-button-2")
  .addEventListener("click", function () {
    const inputBalance = getInputValueById("input-balance-2");
    // some validation--------
    if (inputBalance < 0) {
      alert("Invalid Amount");
      return;
    }
    if (inputBalance) {
      alert("Added Your Money");
    }
    if (isNaN(inputBalance)) {
      alert("Invalid Amount");
      return;
    }
    // some validation--------
    const addedMoney = getInputTextValueById("added-money-2");
    const myBalanced = getInputTextValueById("my-balance");
    const newBalance = inputBalance + addedMoney;
    if (myBalanced > inputBalance) {
      const cutBalance = myBalanced - inputBalance;
      document.getElementById("my-balance").innerText = cutBalance;
    } else {
      alert("not Enought Money");
      return;
    }

    document.getElementById("added-money-2").innerText = newBalance;

    const div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "1px solid #f0f0f0";
    div.style.fontSize = "25px 20px";
    div.style.fontWeight = "700";

    div.innerHTML = `<p>${inputBalance}Taka is Donated for Flood Relief in Feni,Bangladesh</p>`;

    document.getElementById("added-container").appendChild(div);
    // for clear the input field
    document.getElementById("input-balance").value = "";
  });
// end for feni--2nd card--------------

//   start for quota Movement--3rd-card-------------

document
  .getElementById("donate-button-3")
  .addEventListener("click", function () {
    const inputBalance = getInputValueById("input-balance-3");
    // some validation--------
    if (inputBalance < 0) {
      alert("Invalid Amount");
      return;
    }
    if (inputBalance) {
      alert("Added Your Money");
    }
    if (isNaN(inputBalance)) {
      alert("Invalid Amount");
      return;
    }
    // some validation--------
    const addedMoney = getInputTextValueById("added-money-3");
    const myBalanced = getInputTextValueById("my-balance");
    const newBalance = inputBalance + addedMoney;
    if (myBalanced > inputBalance) {
      const cutBalance = myBalanced - inputBalance;
      document.getElementById("my-balance").innerText = cutBalance;
    } else {
      alert("not Enought Money");
      return;
    }

    document.getElementById("added-money-3").innerText = newBalance;

    const div = document.createElement("div");
    div.style.padding = "20px";
    div.style.border = "1px solid #f0f0f0";
    div.style.fontSize = "25px 20px";
    div.style.fontWeight = "700";

    div.innerHTML = `<p>${inputBalance}Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p>`;

    document.getElementById("added-container").appendChild(div);
    // for clear the input field
    document.getElementById("input-balance").value = "";
  });

//   end for quota Movement--3rd-card-------------
