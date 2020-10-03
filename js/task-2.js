const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsEl = document.querySelector('#ingredients');

const newIngredients = ingredients.map ((ingredient) => {
    const itemEL = document.createElement('li');
    itemEL.textContent = ingredient;

    return itemEL;
});

console.log(newIngredients);

ingredientsEl.append(...newIngredients);