const formRef = document.querySelector("login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.curentTarget);
  console.log(formData);

  formData.forEach((value, name) => {});
}
