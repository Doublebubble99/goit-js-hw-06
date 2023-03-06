const loginForm = document.querySelector(".login-form");
const button = document.querySelector("button");
loginForm.setAttribute("autocomplete", "on");
const password = document.querySelector("[name = 'password']");
password.value.trim();
const email = document.querySelector("[name = 'email']");
email.value.trim();
loginForm.addEventListener("submit", valuesValid);

function valuesValid(event) {
  event.preventDefault();
  const {
    elements: { password, email },
  } = event.currentTarget;
  const formObject = {
    email: email.value,
    password: password.value,
  };
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  }
  console.log(formObject);
  event.currentTarget.reset();
}
