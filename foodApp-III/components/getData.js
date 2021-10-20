async function getData(url){
    let body = await fetch(url);
    let res = await body.json();
    return res;
}

function append(data,container){
    data.forEach(({strMeal,strCategory,strInstructions,strTags,strMealThumb})=>{
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = strMealThumb;
        let mealtype = document.createElement('h1');
        let category = document.createElement('p');
        let ins = document.createElement('p');
        let tags = document.createElement('p');
        mealtype.textContent = `Meal: ${strMeal}`;
        category.textContent = `Category: ${strCategory}`;
        ins.textContent = `Instructions: ${strInstructions}`;
        tags.textContent = `Tags: ${strTags}`;
        div.append(img,mealtype,category,ins,tags);
        container.append(div);
    });
}

export {getData,append};
