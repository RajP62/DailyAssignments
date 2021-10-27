// function translate(ev){
//     ev.preventDefault();
//     let inp_txt = document.getElementById('changeFrom').value;
//     console.log(inp_txt)
// }
// var voices = require('responsivevoice';
let sel_el = document.getElementById('translateTo');
fetch('https://libretranslate.de/languages').then((res)=>{
    return res.json();
})
.then((res)=>{
    res.forEach(element => {
        let option = document.createElement('option');
        option.value = element.code;
        option.textContent = element.name;
        sel_el.append(option)
    });
})
let form = document.getElementById("translateForm");
form.addEventListener('onsubmit',showTxt);
function showTxt(ev){
    ev.preventDefault();
    let inp_txt = document.getElementById('changeFrom').value;
    try{
        let data = fetch(`https://libretranslate.de/detect`,{
            method:'POST',
            body:JSON.stringify({q:inp_txt}),
            headers:{
            'Content-Type':'application/json',
        }
        });
        data.then((res)=>{
        return res.json();
        })
        .then((res)=>{
        translate(res[0].language,inp_txt);
        })
    }
    catch(err){
        console.log(err)
    }
}

async function translate(lang,text){
    let transTo = document.getElementById('translateTo').value;
    try{
        let body = await fetch(`https://libretranslate.de/translate`,{
        method:'POST',
        body:JSON.stringify({q:text,source:lang,target:transTo}),
        headers:{
            'Content-Type':'application/json',
        }
        })
        let res = await body.json();
        let displayIn = document.getElementById('changeTo');
        displayIn.textContent = res.translatedText;
        console.log(res.translatedText);
        responsiveVoice.speak(res.translatedText);
    }
    catch(err){
        console.log('err',err);
    }
}

function runSpeechRec(){
    var inp_txt = document.getElementById('changeFrom');

    // let SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    // let recognition = new SpeechRecognition;

    // recognition.onstart = ()=>{
    //     inp_txt.innerHTML = "<small>Listening, Please speak...</small";
    // }

    // recognition.onspeechend = 
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();

    recognition.onstart = ()=>{
        inp_txt.innerHTML = "<small>Listening, please speak</small>";
    }

    recognition.onspeechend = ()=>{
        inp_txt.innerHTML = "<small>Listening stopped</small>";
    }

    recognition.onresult = (event)=>{
        var transcript = event.results[0][0].transcript;
        inp_txt.innerText = transcript;
    }

    recognition.start();
}