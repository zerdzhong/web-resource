var landscapeImage = document.querySelector('img');

landscapeImage.onclick = function(){
    var imgSrc = landscapeImage.getAttribute('src');
    if (imgSrc === 'images/landscape.jpeg') {
        landscapeImage.setAttribute('src', 'images/evening-landscape.jpg');
    } else {
        landscapeImage.setAttribute('src', 'images/landscape.jpeg');
    }
};

var button = document.querySelector('button');
var heading = document.querySelector('h1');

button.onclick = setUserName;

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    heading.textContent = 'Hello, ' + storedName;
}

function setUserName() {
    var name = prompt('Enter your name');
    localStorage.setItem('name', name);
    heading.textContent = 'Hello, ' + name;
}