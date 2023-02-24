const input = document.querySelector("#font-size-control");
const outputTextSize = document.querySelector("#text");
input.addEventListener("input", (event) => {
  const inputRange = input.value;
  outputTextSize.style.fontSize = `${inputRange}px`;
});
