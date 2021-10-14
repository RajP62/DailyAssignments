async function getData(){
    let inp = document.getElementById("searchInp").value;
    let body = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${inp}&type=video&key=AIzaSyAnBaW48ziKnGqp-wJcZoZuyWom_CNt55M&maxResults=20&part=snippet`);
    let res = await body.json();
    appendData(res.items);
}

let mainCont = document.getElementById("content");
function appendData(vedios){
    mainCont.innerHTML = null;
    console.log(vedios)
    vedios.forEach(({id: {videoId},snippet:{title,channelTitle,description}}) =>{
        let div = document.createElement("div");
        console.log(title)
        div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}"/frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        let heading = document.createElement("h1");
        heading.textContent = title;
        heading.style.fontSize = "15px"
        let channelName = document.createElement("p");
        channelName.innerText = channelTitle;
        channelName.style.fontSize = "10px"
        let desc = document.createElement("p");
        desc.innerText = description;
        desc.style.fontSize = "10px";
        div.append(heading,channelName,desc);
        mainCont.append(div);
    });

}

/*
etag: "d1do9qX2YVBi8i_L9CAJDzw3hyY"
id: {kind: 'youtube#video', videoId: '-7_x8Unut1k'}
kind: "youtube#searchResult"
snippet:
channelId: "UCIwFjwMjI0y7PDBVEO9-bkQ"
channelTitle: "Justin Bieber"
description: "Justice (Triple Chucks Deluxe) out now: https://JustinBieber.lnk.to/JusticeTCD Shop Justice merch: https://JustinBieber.lnk.to/OfficialShop​ Follow Justin: ..."
liveBroadcastContent: "none"
publishTime: "2021-03-26T05:26:13Z"
publishedAt: "2021-03-26T05:26:13Z"
thumbnails: {default: {…}, medium: {…}, high: {…}}
title: "Justin Bieber - Name (Visualizer) ft. Tori Kelly"*/

// Break

// function appendData(vedio_data){
      
//     // mainCont.innerHTML = null;
//     vedio_data.forEach(({id: { videoId }})=>{//why vedioId destructuring is not working-errorpoint1
//         console.log(videoId)
//         // let div = document.createElement("div");
//         // div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}/frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
//         // div.style.marginTop = "20px";
//         // vedios.append(div);
//     });

// }