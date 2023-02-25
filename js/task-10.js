function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const createButton = document.querySelector("[data-create]");
// const destroyButton = document.querySelector("[data-destroy]");
// const input = document.querySelector("input");
// const boxes = document.querySelector("#boxes");
// createButton.addEventListener("click", () => {
//   createBoxes(input.value);
// });
// destroyButton.addEventListener("click", () => {
//   destroyBoxes();
// });

// function createBoxes(amount) {
//   const box = "<div class = 'box'></div>";
//   const boxArray = [];
//   for (let v = 0; v < amount; v += 1) {
//     boxArray.push(box);
//   }
//   const boxList = boxArray
//     .map((array) => boxes.insertAdjacentHTML("afterbegin", array))
//     .join("");
//   boxList.s;
// }
// function destroyBoxes() {
//   boxes.innerHTML = "";
// }
