const categoriesTitle = document.querySelectorAll('.item > h2');
const numberOfCategories = categoriesTitle.length;

console.log(`Number of categories:`, numberOfCategories);

categoriesTitle.forEach(item => {
    const categoryTitle = item.textContent;
    const numberOfElements = item.nextElementSibling.children.length;
    console.log(`Category:`, categoryTitle);
    console.log(`Elements:`, numberOfElements);
});