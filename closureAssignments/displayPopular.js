const api_key = "api_key=1f20926b9bfb3d935a3aa39dccee2a9b";
const base_url = "https://api.themoviedb.org/3";
const api_url = base_url+ '/discover/movie?sort_by=popularity.desc&'+api_key;
const image_baseUrl = "https://image.tmdb.org/t/p/w500";

let main_cont = document.getElementById("trendingWrapper");

async function fetchTrending(){
    try{
        let body = await fetch(api_url);
        let data = await body.json();
        console.log(data.results)
        displayTrendingData(data.results)
    }catch(er){
        console.log("the error is"+er)
    }
   
}
/*adult: false
backdrop_path: "/uRkRJjrxVa04w7k83Hy20FKot4G.jpg"
genre_ids: [28]
id: 859041
original_language: "zh"
original_title: "疯狂的拳头"
overview: "After an opponent dies mid-match, a prominent MMA champion swore never to fight again and retired to run his family's company. But when his best friend dies under suspicious circumstances, he has no choice but to step back in the ring."
popularity: 1147.607
poster_path: "/jVAEVDNdUPRKJ7hJ4zt6lGcLATD.jpg"
release_date: "2017-05-25"
title: "Crazy Fist"
video: false
vote_average: 7.6
vote_count: 32*/

function displayTrendingData(data){
    data.forEach(function(el){
        let holder = document.createElement("div");
        holder.setAttribute("class","trendingImages")
    let img = document.createElement("img");
    img.src = `${image_baseUrl}${el.poster_path}`;
    let title = document.createElement("h1");
    title.textContent = el.title;
    let org_title = document.createElement("p");
    org_title.textContent = el.original_title;
    let overview = document.createElement("p");
    overview.textContent = el.overview;
    let org_lang = document.createElement("p");
    org_lang.textContent = el.original_language;
    let popularity = document.createElement("p");
    popularity.textContent = el.popularity;
    let rel_date = document.createElement("p");
    rel_date.textContent = el.release_date;

    holder.append(img,title,org_title,overview,org_lang,popularity,rel_date);

    console.log(holder);
    main_cont.append(holder);
    })
    
}

fetchTrending();