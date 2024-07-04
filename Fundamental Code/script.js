// Add event listener to submit button
document
  .getElementById("submit-button")
  .addEventListener("click", function (event) {
    if (!validateForm(event)) {
      return;
    }
    submitPayment();
  });

// validate the form
function validateForm(event) {
  let inputRequired = document.getElementById("monthly-payment").value.trim();
  if (inputRequired === "") {
    alert("Please enter the price or MSRP"); // convert to modal
    event.preventDefault();
    return false;
  }

  if (isNaN(inputRequired)) {
    alert("Please enter the price or MSRP as a number"); // convert to modal
    event.preventDefault();
    return false;
  }

  let parsedInput = parseFloat(inputRequired);
  if (parsedInput <= 0) {
    alert("Please enter a positive number for the price or MSRP"); // convert to modal
    event.preventDefault();
    return false;
  }

  let formattedInput = parsedInput.toFixed(2);
  document.getElementById("monthly-payment").value = formattedInput;

  return true;
}

// set monthly payment input to local storage
function submitPayment() {
  let paymentInput = document.getElementById("monthly-payment").value;
  localStorage.setItem("monthlyPayment", paymentInput);
}

// get monthly payment from local storage and display

let savedPayment = this.localStorage.getItem("monthlyPayment");

window.addEventListener("load", function () {
  if (savedPayment) {
    document.getElementById("monthly-payment").value = savedPayment;
    let displayPayment = document.getElementById("monthly-payment-display");
    displayPayment.textContent = `Your monthly payment is: $${savedPayment}.`;
  }
});

// calculate and display difference between monthly payment and quote
window.addEventListener("load", function () {
  let quote = 800; // convert to modal input
  if (savedPayment) {
    let displayDifference = document.getElementById(
      "monthly-difference-display"
    );
    let savedPaymentValue = parseFloat(savedPayment);
    let difference = quote - savedPaymentValue;
    displayDifference.textContent = `You could be overpaying by as much as: $${difference.toFixed(
      2
    )} p/m.`;
  }
});

// create button to show suggestions with tooltip
window.addEventListener("load", function () {
  if (savedPayment) {
    let tipButtonContainer = document.getElementById(
      "tooltip-button-container"
    );
    let tipButton = this.document.createElement("button");
    tipButton.setAttribute("id", "tips-button");
    tipButton.textContent = `Tips`;
    tipButtonContainer.appendChild(tipButton);

    tipButton.addEventListener("click", showTips);
  }
});

function showTips() {
  let showTipsContainer = document.getElementById("show-tips-container");

  let existingTips = document.getElementById("show-tips");
  if (existingTips) {
    return;
  }

  let showTips = document.createElement("p");
  showTips.setAttribute("id", "show-tips");
  showTips.textContent = "Check markup";
  showTipsContainer.appendChild(showTips);
}
