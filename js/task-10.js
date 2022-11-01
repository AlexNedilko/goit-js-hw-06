function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
};
const boxesRef = document.querySelector("#boxes");
const RandomColor = getRandomHexColor();
const newBoxes = [];

const onCreateBtnClick = () => {
  // for (let i = 0; (i = refs.input.value); i += 1) {
  //   newBoxes.push(
  //     `<div width = 20 + i*10; heigth = 20 + i * 10; color = ${RandomColor}>`
  //   );
  // const newBox = document.createElement("div");
  // newBox.style.width = `20 + ${i}*10px`;
  // newBox.style.height = `20 + ${i}*10px`;
  // newBox.style.color = RandomColor;
  // boxesRef.;
  console.log(refs.input.value);
};

refs.create.addEventListener("click", onCreateBtnClick);

// console.log(refs.input.value);
