console.log("Hello");
import Note from './images/note.png';
import ('./index.css')
let img = document.createElement("img");
img.src = Note;
document.getElementById("imgHolder").appendChild(img);
let formData = document.getElementById("takenote");

document.getElementById("showNotes").classList.add("blue");

formData.addEventListener("submit",(el)=>{
    el.preventDefault();
    let userInp = document.getElementById("userInput").value;
    let note = document.createElement("p");
    note.innerHTML = userInp;
    document.getElementById("showNotes").appendChild(note);
});