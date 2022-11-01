function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorTextRef = document.querySelector(".color");
const btnRef = document.querySelector(".change-color");

btnRef.addEventListener("click", (event) => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorTextRef.textContent = randomColor;
});
