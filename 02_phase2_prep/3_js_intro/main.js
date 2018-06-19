// Variables

var name = "Jason";
var myString = "Hello World";

console.log(name) // This is like print
console.log(myString)







// = vs == vs ===

var x = 5 // One equal sign is assignment
x == "5" // This will return true. Two equal signs only compare the values but not the type of data

x === "5" // This will return false. Three equal signs compare both the values and the data type







// Booleans - notice in JS true and false are lower case

var y = true;
var z = false;







// Three ways to write functions

function helloWorld(){
	console.log("Hello");
};

// this is the way we will be writing our functions for this course
var helloWorld = function(){ 
	console.log("Hello");
};



// String Concatenation

var a = "Hello";
var b = "World";

console.log(a + " " + b)

console.log(a,b)

var x = "Beautiful "
var y = "People"

console.log(x.concat(y))







// JS Objects

var jsObj = {
	"name": "Jason Ng",
	"movies": ["Road House", "Commando", "Time Cop"]
};

console.log(jsObj["movies"][2])


var turtles = {
    "Raphael" : "Red",
    "Leonardo" : "Blue",
    "Donnatello": "Purple",
    "Micaelangelo":"Orange"
};

var bam = {
  "name":"Jason",
  "sayName": function sayName(){
    console.log(this.name)
  }
}

bam.sayName()


var names = [];
var colors = [];

for(var key in turtles){
  names.push(key);
  colors.push(turtles[key]);
};
console.log(names);
console.log(colors);










// Use Process.ArgV to get arguments from the terminal

// Inside the terminal you might write something like "Node main.js Jason"
var allValues = process.argv 
console.log(allValues)// will print ["Node", "main.js", "Jason"] to the terminal

var name = process.argv[2] // We are using indexes to grab the value we want
console.log(name)

var userInput = process.argv
console.log(userInput)


console.log("jeffityjeffjeff")