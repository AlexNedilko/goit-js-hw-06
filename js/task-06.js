const InputRef = document.querySelector("#validation-input");
const datalength = Number(InputRef.dataset.length);

InputRef.addEventListener("blur", (event) => {
  if (InputRef.value.length == datalength) {
    InputRef.classList.add("valid");
    InputRef.classList.remove("invalid");
  } else {
    InputRef.classList.add("invalid");
    InputRef.classList.remove("valid");
  }
});
// console.log(inputValue);
console.dir(InputRef);
console.log(InputRef.value.length);
