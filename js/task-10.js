function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector("input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
};

const boxesRef = document.querySelector("#boxes");
const newBoxes = [];

const onCreateBtnClick = (event) => {
  event.preventDefault();
  newBoxes.pop();

  const count = refs.input.value;
  for (let i = 1; i <= count; i += 1) {
    const RandomColor = getRandomHexColor();
    console.log(i);
    if (i === 100) {
      refs.input.value = "100";
      break;
    }
    let newBox = `<div style="width: ${20 + i * 10}px; height: ${
      20 + i * 10
    }px; background: ${RandomColor};"></div>`;
    newBoxes.push(newBox);
  }

  boxesRef.insertAdjacentHTML("afterbegin", newBoxes.join(""));
  console.log(newBoxes);
};

const onDestroyBtnClick = (event) => {
  newBoxes.splice(0, newBoxes.length);
  boxesRef.innerHTML = "";
  refs.input.value = "0";
  console.log(newBoxes);
};

refs.destroyBtn.addEventListener("click", onDestroyBtnClick);
refs.createBtn.addEventListener("click", onCreateBtnClick);
