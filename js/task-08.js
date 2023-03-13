const loginForm = document.querySelector(".login-form");
const button = document.querySelector("button");
loginForm.setAttribute("autocomplete", "on");
const password = document.querySelector("[name = 'password']");
const email = document.querySelector("[name = 'email']");
loginForm.addEventListener("submit", valuesValid);

function valuesValid(event) {
  event.preventDefault();
  const {
    elements: { password, email },
  } = event.currentTarget;
  const formObject = {
    email: email.value.trim(""),
    password: password.value.trim(""),
  };
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  console.log(formObject);
  event.currentTarget.reset();
}
