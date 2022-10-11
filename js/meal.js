
const loadMeals = search => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = ``;
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div onclick ="loadMealDetails(${meal.idMeal})"  class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Name: ${meal.strMeal}</h5>
                <p class="card-text"><h6>Cooking Process:</h6> ${meal.strInstructions.slice(0,300)}</p>
            </div>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });
    
}

const searchFood = () =>{
    const searchField = document.getElementById("food-field");
    const searchText = searchField.value;
    loadMeals(searchText);
    searchField.value = ``;
}

const loadMealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <h2>Meal Details Is Here...</h2>
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
    </div>
    `;
    detailContainer.appendChild(mealDiv);
}

loadMeals('');
