const valueRef = document.querySelector("#value");
const minusBtnRef = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const plusBtnRef = document.querySelector(
  '#counter button[data-action="increment"]'
);

let totalValue = 0;

minusBtnRef.addEventListener("click", () => {
  totalValue -= 1;
  valueRef.textContent = totalValue;
});
plusBtnRef.addEventListener("click", () => {
  totalValue += 1;
  valueRef.textContent = totalValue;
});
