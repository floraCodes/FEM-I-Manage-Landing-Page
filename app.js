const subscribeForm = document.querySelector(".subscribe-form");
const emailInput = document.querySelector(".email-input");
const errorMessage = document.querySelector(".error-message");

function main() {
  subscribeForm.addEventListener("submit", e => inputCheck(e));
}
main();

function inputCheck(e) {
  if (emailInput.value) {
    this.emailFormatCheck(e);
  } else {
    e.preventDefault();
    this.emptyInputError();
  }
}
function emailFormatCheck(e) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const emailTest = regexEmail.test(emailInput.value);

  if (!emailTest) {
    e.preventDefault();
    errorMessage.innerHTML = "Invalid email format";
    errorMessage.style.visibility = "visible";
  }
}
function emptyInputError() {
  errorMessage.innerHTML = "The field is empty";
  errorMessage.style.visibility = "visible";
}
