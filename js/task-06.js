const input = document.querySelector("#validation-input");

input.addEventListener("blur", validValue);
input.addEventListener("blur", invalidValue);
function validValue(event) {
  const inputValue = event.currentTarget;
  const inputLength = inputValue.value.length;
  if (inputLength === 6) {
    input.classList.add("valid");
    return;
  }
  input.classList.replace("valid", "invalid");
}
function invalidValue(event) {
  const inputValue = event.currentTarget;
  const inputLength = inputValue.value.length;
  if (inputLength !== 6) {
    input.classList.add("invalid");
    return;
  }
  input.classList.replace("invalid", "valid");
}
