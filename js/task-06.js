const input = document.querySelector("#validation-input");
input.addEventListener("blur", () => {
  const inputLength = input.value.trim().length;
  const attrValue = input.dataset.length;
  if (inputLength == attrValue) {
    validValue(input);
    return;
  }
  invalidValue(input);
});
function validValue(event) {
  event.classList.add("valid");
  event.classList.remove("invalid");
}
function invalidValue(event) {
  event.classList.add("invalid");
  event.classList.remove("valid");
}
