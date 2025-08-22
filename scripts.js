const input = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const recipeList = document.querySelector(".recipe-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputValue = event.target[0].value;
  searchRecipes(inputValue);
});

async function searchRecipes(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();

  showRecipes(data.meals);
}

function showRecipes(recipes) {
  recipeList.innerHTML = recipes
    .map(
      (item) => `
        <div class="recipe-card" onClick="getRecipesDetails(${item.idMeal})">
        <img src="${item.strMealThumb}" alt="receita-foto">
        <h3>${item.strMeal}</h3>
        </div>
        `
    )
    .join("");
}

async function getRecipesDetails(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
}
