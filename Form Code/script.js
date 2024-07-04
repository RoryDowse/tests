document
  .getElementById("submit-button")
  .addEventListener("click", submitInputs);

// set inputs to local storage
function submitInputs() {
  let vehiclePrice = document.getElementById("vehicle-price").value;
  localStorage.setItem("vehicle-price", vehiclePrice);

  let downPayment = document.getElementById("down-payment").value;
  localStorage.setItem("down-payment", downPayment);

  let loanTerm = document.getElementById("loan-term").value;
  localStorage.setItem("loan-term", loanTerm);
}

// get inputs from local storage
window.addEventListener("load", function () {
  let savedVehiclePrice = this.localStorage.getItem("vehicle-price");
  let savedDownPayment = this.localStorage.getItem("down-payment");
  let savedLoanTerm = this.localStorage.getItem("loan-term");

  // Calculate and display monthly payment
  if (savedVehiclePrice && savedDownPayment && savedLoanTerm) {
    savedVehiclePrice = parseFloat(savedVehiclePrice);
    savedDownPayment = parseFloat(savedDownPayment);
    savedLoanTerm = parseFloat(savedLoanTerm);
  }

  let monthlyPayment = (savedVehiclePrice - savedDownPayment) / savedLoanTerm;

  let displayPayment = document.getElementById("monthly-payment-display");
  displayPayment.textContent = `Your monthly payment is: $${monthlyPayment.toFixed(
    2
  )}.`;
});
