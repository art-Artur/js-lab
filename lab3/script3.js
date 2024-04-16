const button = document.getElementById('button');
button.onclick = function () {
  button.classList.toggle('button-1');
  button.classList.toggle('button-1-active');
};


const buttonTwoLike = document.getElementById('likee');
const buttonTwoDislike = document.getElementById('dislike');
buttonTwoLike.onclick = function () {
  buttonTwoLike.classList.toggle('button-2-active');
  buttonTwoDislike.classList.remove('button-2-active');
};
buttonTwoDislike.onclick = function () {
  buttonTwoDislike.classList.toggle('button-2-active');
  buttonTwoLike.classList.remove('button-2-active');
};


const buttonThreeClick = document.getElementById('button-3');
const clickCount = document.getElementById('clickCount');
const clearBasket = document.getElementById('clear-basket');
let cardBasket = 0;
buttonThreeClick.onclick = function () {
  cardBasket++;
  clickCount.textContent = cardBasket;
};
clearBasket.onclick = function () {
  cardBasket = 0;
  clickCount.textContent = cardBasket;
};


let arr = [];
const addElement = document.getElementById('add-element');
const sortMax = document.getElementById('sort-max');
const sortMin = document.getElementById('sort-min');
const elementOne = document.getElementById('element-1');
const elementTwo = document.getElementById('element-2');
const elementThree = document.getElementById('element-3');
addElement.onclick = function () {
  elementOne.textContent = Math.floor(Math.random() * 100);
  elementTwo.textContent = Math.floor(Math.random() * 100);
  elementThree.textContent = Math.floor(Math.random() * 100);
  arr = [elementOne.textContent, elementTwo.textContent, elementThree.textContent];
};
sortMax.onclick = function () {
  arr.sort((a, b) => b - a);
  elementOne.textContent = arr[0];
  elementTwo.textContent = arr[1];
  elementThree.textContent = arr[2];
};
sortMin.onclick = function () {
  arr.sort((a, b) => b - a);
  elementOne.textContent = arr[2];
  elementTwo.textContent = arr[1];
  elementThree.textContent = arr[0];
};


const y = document.querySelector('.y');
const x = document.querySelector('.x');
window.addEventListener('click', (cord) => {
  x.textContent = `Клик по координатам X: ${cord.clientX}`;
  y.textContent = `Клик по координатам Y: ${cord.clientY}`;
});
