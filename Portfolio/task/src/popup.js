let flashwindow = document.querySelector("#flashcards-window");
let pianowindow = document.querySelector("#piano-window");
let openflash = document.querySelector("#flashcards-openwindow");
let openpiano = document.querySelector("#piano-openwindow");
let closeflash = document.querySelector("#flashcards-closewindow");
let closepiano = document.querySelector("#piano-closewindow");

openflash.onclick = function(){
    flashwindow.style.display = "block";
};

closeflash.onclick = function(){
    flashwindow.style.display ="none";
}
openpiano.onclick = function(){
    pianowindow.style.display = "block";
};

closepiano.onclick = function(){
    pianowindow.style.display ="none";
}