const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const gallery = document.querySelector(".gallery");
const item = `<li></li>`;
const imagesCollection = images.forEach((image) => {
  const listString = `<li><img class = "img1"><img class = "img2"><img class = "img3"></li>`;
  gallery.insertAdjacentHTML("afterbegin", `${listString}`);
  const pictureOne = document.querySelector(".img1");
  const pictureTwo = document.querySelector(".img2");
  const pictureThree = document.querySelector(".img3");
  pictureOne.src = image.url;
  pictureOne.alt = image.alt;
  pictureTwo.src = image.url;
  pictureTwo.alt = image.alt;
  pictureThree.src = image.url;
  pictureThree.alt = image.alt;
  return;
});
