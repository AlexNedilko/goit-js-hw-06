// const categoriesEl = document.querySelector("#categories");
// console.log(`Number of categories: ${categoriesEl.children.length}`);

const categoriesEl = document.querySelectorAll("li.item");
const categoryNameEl = categoriesEl.firstElementChild;
console.log(`Number of categories: ${categoriesEl.length}`);

for (const category of categoriesEl) {
  console.log("");
  console.log(`Category: ${category.firstElementChild.textContent}`);
  const ElementsEl = category.querySelector("ul");
  console.log(`Elements: ${ElementsEl.children.length}`);
}
