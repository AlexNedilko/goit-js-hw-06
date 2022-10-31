const inputRef = document.querySelector("#name-input");

const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  if (inputRef.value) {
    spanRef.textContent = inputRef.value;
  } else {
    spanRef.textContent = "Anonymous";
  }
});
