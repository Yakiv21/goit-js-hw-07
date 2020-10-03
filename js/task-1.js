const categoriesRef = document.querySelector("#categories");
// console.log(categoriesRef);

const categoriesTitleRef = document.querySelectorAll("h2");
// console.log(categoriesTitleRef);

const itemsEl = document.querySelectorAll('.item');
// console.log(itemsEl);
console.log(`В списке ${itemsEl.length} категории.`);

function item(element) {
    const nameCategory = element.querySelector('h2');
    const qualityItems = element.querySelectorAll('li');
    console.log(`Категория: ${nameCategory.textContent}`);
    console.log(`Количество Элементов: ${qualityItems.length}`);

};

itemsEl.forEach(item);