const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ulEl = document.querySelector("#ingredients");
const liArrayEl = [];
for (const ingredient of ingredients) {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  liArrayEl.push(itemEl);
}
ulEl.append(...liArrayEl);
