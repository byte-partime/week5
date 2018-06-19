console.log("we are connected");

// var section = document.getElementById('blogPost');

var section = document.querySelector("#blogPost");

// var rand = document.getElementsByClassName('rand');

var rand = document.querySelectorAll('.rand');

var h1 = document.createElement("h1");

h1.innerHTML = "Hello World";

section.appendChild(h1)

