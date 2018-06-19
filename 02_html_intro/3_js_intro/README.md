# JavaScript Introduction

### Learning Objectives
***Students will be able to...***

* Declare a variable in JavaScript
* Iterate through JS data structures
* Store JS data types in Objects
* Use Control Flow in JS
* Use JS Process.Argv

---
### Context

* JavaScript is sexy. I'll show you why

---
### Lesson

##### Part 1 - A brief history. Why is this important?

* JavaScript is the `only language` that can interact with the DOM (elements in the browser) and because of how annoying the DOM can be, JS is the victim of a lot of unjust hatred
* No matter what language you are going to build your server in, whether it's PHP, Ruby, Python, or even NodeJS, you will still need JavaScript to talk to the browser.
* JavaScript was created in 10 days in 1995 by Brendan Eich.
* It is used to build the front end of websites, how they looked, and how users could interact with them. 
* It was not until recently JavaScript could be used as a backend language
* This occured with the emergence of Node JS. A runtime environment that allows programmers to build server-side applications in JavaScript
* This has gained traction as it is convenient to build a full web application, the front and back, in the same language
* JavaScript has been around a very long time and has a lot of documentation on it. Google ALL YOUR QUESTIONS!

##### Part 2 - Node REPL

* We will be installing Node JS to use it's REPL environment in the terminal
* To install node on your Mac run `brew install node`
	* Here's a link for more information. [http://blog.teamtreehouse.com/install-node-js-npm-mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
* To install node on your Linux well first install `nvm` the Node Version Manager
	* Follow the directions here. [https://github.com/creationix/nvm](https://github.com/creationix/nvm)
	* Run this command in terminal to install it 

	```
		curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
	```
	* Run this command to check if nvm was installed properly
	
	```
		command -v nvm
	```
	* Run this command to use nvm to install node
	
	```
		nvm install node
	```
* Now you should be able to run `node` in your terminal and the Node REPL should open up
* This is the same as the Python REPL environment except it takes JavaScript syntax

##### Part 3 - JS Syntax / Data Types / Data Structures

##### Follow along with the `main.js` example file

***To run the file in terminal it's similar to the way we do Python files***

```
node main.js
```

***Variables / Assignment / Comparison***

* Defining variables in JS
	*  `var` is placed in front of the variable name
	* DO NOT assign/create variables without using the word `var`, you will enter items into the global scope.
	* Variables do not start with a number or special character
	* All things in JS are written in camelCase
* `Assignment is ONE EQUAL SIGN =`
* `Comparisons are THREE EQUAL SIGNS ===`
	* Two Equal signs as a comparator in JS exists but we NEVER USE IT!!!
	* It will check for value but not data type, it's essentially useless.

```
0 == "0" // returns true

0 === "0" // returns false
```
* We complete all our JS statements with semi colons
* This does not mean EVERY line gets a semi colon because a statement can extend over multiple lines

```
var num = 10;

var hello = "Hello World";

var names = [
	"Jason",
	"Kimberly",
	"Zack",
	"Trini",
	"Billy"
];
```

***Booleans***

* Same thing as Python.
* Takes in the factors of `true` or `false`
* JavaScript is lowercase "t" and "f"

***Numbers***

* Numbers are the same as well
* Don't worry about "floats" 

***Arrays***

* `Arrays` in JavaScript are like Lists in Python
* They are an iterable and their values can be targeted with indexes
* Written the same way with square brackets `[]`

***Objects***

* Now this can be a little confusing since in Python we referred to everything as an Object
* For the purposes of JavaScript we will be referring to Dictionary like structures as Objects
* You may also hear others call them `associative arrays`, but we will be calling them Objects
* Key:Value Mappings written the same way with curly braces `{}` and the key in quotes followed by a colon
* JS Objects are pretty cool because they are so much more than just the idea of "Dictionaries". They also have the ability to house functions.
* Example: DO NOT worry about the "this" keyword yet, we'll touch upon that later in the course.

```
var bam = {
  "name":"Jason",
  "sayName": function sayName(){
    console.log(this.name)
  }
}

bam.sayName()
```

***Strings***

* Strings are written the same way in JavaScript as in Python
* The only difference is the concatenation
* Concatenation can be done with plus signs `+` or commas `,`

```
var a = "Hello";
var b = "World";

console.log(a + " " + b)

console.log(a,b)

var x = "Beautiful "
var y = "People"

console.log(x.concat(y))
```
* There is no `.format` method or usage of `%` and `{}` as placeholders

##### Part 4 - JS Syntax Control Flow / Iteration

***Function Syntax***

* There are three ways to declare functions in JavaScript

```
function helloWorld(){
	console.log("Hello");
};

var helloWorld = function helloWorld(){
	console.log("Hello");
};

var helloWorld = function(){
	console.log("Hello");
};
```
* For this course we will be sticking with the last example of function declaration. This is because we want to be safe from `hoisting` bugs. You can google this on your free time if you'd like
* Remember all your JS syntax will end with a semi colon
* Function code blocks are put in between curly brackets `{}`
* White spacing does not have any relevance in JavaScript but we indent to make our code readable and organized

***Control Flow***

* JavaScript also offers us the use of the if/else statement. The syntax here is much different

```
var deadpool = "Wade Wilson";

if (deadpool === "James Howlett"){
	console.log("Hey you're Wolverine");
} else if (deadpool === "Wade Wilson"){
	console.log("Here are your chimichangas");
} else {
	console.log("You're not a super hero!")
};
```
* Differences
	* Wrap comparisons in parenthesis
	* End things with semi colons
	* Use curly brackets `{}` between each statement
	* Use three equal signs `===` for comparison

***Loops***

* The for loop is very different in JavaScript than Python

```
var animals = ["dog", "cat", "bird", "turtle", "fish", "hamster", "lizard"];

for (var i = 0; i < animals.length-1; i++){
    console.log(animals[i])
};

"dog"
"cat"
"bird"
"turtle"
"fish"
"hamster"
"lizard"
```
* Instead of a `for in` loop like Python we have the use of setting our own variable
* `var i = 0` is creating a variable called i that will start at zero
* `i < animals.length-1` - as long as this returns True the code in between the curly brackets will run
* `i++` this will increment i after every loop iteration
* The for loop in JavaScript is much more dynamic because we can utilize i to grab different values for comparison.
	* e.g.
		* increment by 2 to grab every other value
		* compare the value at the current index to a value at the previous index

---

* While loops are almost the same as Python but with all the usual JavaScript syntax

```
var i = 0;

while (i < 10){
    console.log(i)
    i += 1
};

console.log("all done!");

[output]
1
2
3
4
5
6
7
8
9
all done!
```

***Five Min Exercise***

* Write an application that will loop through the following JS Object and console.log the keys into one array and the values in separate array

```
var turtles = {
	"Raphael" : "Red",
	"Leonardo" : "Blue",
	"Donnatello": "Purple",
	"Micaelangelo":"Orange"
};
```
* How can we grab keys? Help us Google!!!

##### Part 5 - Process.ArgV

* This is the same idea as what we did with Pythons sys.argv.
* When we want to enter a value the usual syntax is

```
var userInput = process.argv[2]
```
* Why is it two?
* Process.argv takes your command line arguments and returns them as an array
* The item at index zero will be "node" and the item at index one will be the file name
