const textInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = event.currentTarget.value;
  nameOutput.textContent = inputValue;
  if (nameOutput.textContent === "") {
    nameOutput.textContent = "Anonymous";
  }
});
