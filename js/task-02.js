const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
  const items = document.createElement('li');

  items.classList = 'item';
  items.textContent = ingredient;
  list.appendChild(items);
});
