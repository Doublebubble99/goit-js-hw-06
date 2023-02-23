const categories = document.querySelector("#categories");
const categoriesQuantity = categories.children.length;
console.log("Number of categories: ", categoriesQuantity);

const firstItem = categories.firstElementChild;
const firstTitle = firstItem.querySelector("h2");
const firstList = firstItem.querySelector("ul");
console.log("Category: ", firstTitle.textContent);
console.log("Elements: ", firstList.children.length);

const secondItem = firstItem.nextElementSibling;
const secondTitle = secondItem.querySelector("h2");
const secondList = secondItem.querySelector("ul");
console.log("Category: ", secondTitle.textContent);
console.log("Elements: ", secondList.children.length);

const thirdItem = categories.lastElementChild;
const thirdTitle = thirdItem.querySelector("h2");
const thirdList = thirdItem.querySelector("ul");
console.log("Category: ", thirdTitle.textContent);
console.log("Elements: ", thirdList.children.length);
