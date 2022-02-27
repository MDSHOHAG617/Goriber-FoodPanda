// /* Preloading Results */
const inputFeild = document.getElementById('inputFeild');
const input = inputFeild.value;


// console.log(input)
inputFeild.value = "";

const url = `https://themealdb.com/api/json/v1/1/search.php?s=${input}`;
fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))


const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = '';
    // searchResult.textContent = '';
    if (meals.length == 0) {
        alert("No Result Found")
    }
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div');
        div.className = "col";
        div.innerHTML = `<div class="col">
            <div onclick="loadMealDetaile(${meal.idMeal})" class="card ">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>`;

        searchResult.appendChild(div)


    });
}
/* Preloading Results Ends */



/* load search by cliking search button  */






const loadSearch = () => {
    document.getElementById('spinner').style.display = "block";
    const inputFeild = document.getElementById('inputFeild');
    const input = inputFeild.value;
    // console.log(input)
    inputFeild.value = "";




    const url = `https://themealdb.com/api/json/v1/1/search.php?s=${input}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))



    const displaySearchResult = meals => {
        document.getElementById('spinner').style.display = "none";


        // spinner('block')
        const searchResult = document.getElementById('search-result');
        searchResult.innerHTML = '';



        if (meals.length == 0) {
            alert("No Result Found")
        }
        // searchResult.textContent = '';
        meals.forEach(meal => {
            // console.log(meal)
            const div = document.createElement('div');
            div.className = "col";
            div.innerHTML = `<div class="col">
            <div onclick="loadMealDetaile(${meal.idMeal})" class="card ">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        </div>`;

            searchResult.appendChild(div)


        });
    }

}



const loadMealDetaile = mealId => {
    const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data))

}

const displayMealDetail = meal => {
    // console.log(meal.meals[0])
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.meals[0].strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.meals[0].strMeal}</h5>
                <p class="card-text">${meal.meals[0].strInstructions.slice(0, 100)}</p>
                <a href="${meal.meals[0].strYoutube}" class="btn btn-primary">Go somewhere</a>
            </div>
    `;

    mealDetails.appendChild(div);
}


// const spinner = (condition) => {
//     document.getElementById("spinner").style.display = condition;
// };