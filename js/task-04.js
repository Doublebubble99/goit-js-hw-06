const spanValue = document.querySelector("#value");
let counterValue = 0;
const incrementButton = document.querySelector("[data-action = 'increment']");
const decrementButton = document.querySelector("[data-action = 'decrement']");

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
});
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
});
