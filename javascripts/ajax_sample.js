let number = 0;
let data = null; 
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
const request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = JSON.parse(request.responseText); // Parsear los datos JSON
    }
}
request.open("GET", "data/ajax.json"); // Solicitar el archivo JSON
request.send();
}

function changeVideo() {
if (!data) {
    getData();     return;
}
titleArea.innerHTML = data[number].title; 
contentArea.innerHTML = data[number].content; 
videoArea.style.display = "block"; 
videoArea.setAttribute("src", data[number].url);
number = (number + 1) % data.length;
}

button.addEventListener('click', changeVideo); 
window.onload = function() {
getData(); 
};

button.addEventListener('click', changeVideo); 

window.onload = function() {
getData(); 
};
