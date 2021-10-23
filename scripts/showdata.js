//getData()
//append()

async function getData(url){
    let res = await fetch(url);
    let data = await res.json();

    return data;
}

function append_home(data, container){

    data.forEach(({strCategory,strCategoryThumb}) => {
        
        let div = document.createElement("div")
        div.style.border="1px solid black";

        let p= document.createElement("p");
        p.style.fontSize="25px";
        p.innerText=strCategory;
        let img = document.createElement("img");
        img.src=strCategoryThumb;

        div.append(img,p);

        container.append(div);
    });

}

function append(data, container){
    let serchdiv=document.getElementById("search_dv");
    serchdiv.innerHTML=null;

    data.forEach(({strMeal,strMealThumb}) => {
        
        let div = document.createElement("div")
        div.style.border="1px solid black";

        let p= document.createElement("p");
        p.style.fontSize="25px";
        p.innerText=strMeal;
        
        let img = document.createElement("img");
        img.src=strMealThumb;

        div.append(img,p);

        container.append(div);
    });

}

function append_meal(data, container){
    let serchdiv=document.getElementById("search_dv");
    serchdiv.innerHTML=null;

    data.forEach(({strMeal,strMealThumb,strInstructions}) => {
        
        let div = document.createElement("div")
        div.style.border="1px solid black";

        let p= document.createElement("p");
        p.style.fontSize="25px";
        p.innerText=strMeal;
        let img = document.createElement("img");
        img.src=strMealThumb;

        let p1=document.createElement("p");
        p1.innerText=strInstructions;

        div.append(img,p,p1);

        container.append(div);
    });

}



async function search(){

    let search_text = document.getElementById("search").value;

    let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search_text}`);

    let data = res.json();
    
    return data;

}



export {getData ,append_home, append ,append_meal, search}