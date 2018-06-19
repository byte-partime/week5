# Weekend Review

---

### HTML

* How is HTML5 different from HTML?
* What are semantic tags?
* What are the two default display properties for elements?
* What are some attributes we can apply to an HTML element?
* What kind of items go into the \<head\> of our document?
* What kind of items go into the \<body\> of our document?
* Why is HTML not considered a programming language?

### CSS

* What are the three ways to apply CSS to your HTML
* How do we target (or *select*) HTML elements using CSS?
* What is CSS Specificity? What is the order? 

### JavaScript

* How do for loops work in JS? While Loops?
* How do we write if else statements?
* What does string concatenation look like in JS?
* What are JS Arrays? JS Objects?

---

# What is the DOM

### Learning Objectives
***Students will be able to...***

* Navigate the DOM
* Target elements on the DOM
* Manipulate the DOM by...
	* adding
	* removing
	* changing
* Utilize JS Scope along with Higher Order Functions
* Start a GithubIO page. 

---
### Context

* Give the user more powerssss

---
### Lesson

##### Part 1 - JS Scope

* JavaScript allows us to program in an Object Oriented Way or in a Functional way.
* What is scope and how does it look in JavaScript? 
	* Scope is where data exists and is accessible from. 
	* Variables and Functions belong either to a local(also known as lexical) scope, enclosing scope, or a global scope.
* Variables declared in a function are in the local scope.
* Variables in the global scope are accessible anywhere.
* If you `DO NOT` declare variables in JS with the `var` keyword that variable will be declared in the global scope. 

***REMEMBER WE WANT TO KEEP OUR GLOBAL SCOPE CLEAN***

* JavaScript Scope works in the "Functional Scope" (As opposed to block level scope)

```
var blah = function(){
	var x = 10;
	
	if (x === 20){
		var y = 20
	} else {
		var z = 30
	}
	console.log(x)
	console.log(y)
	console.log(z)
}
```
* What will appear for the three console logs?

```
10
undefined
30
```

* Why didn't we get an error? 

***Hoisting***

* The above example is an example of how variables will be "hoisted" to the top of their scope
* Since JavaScript works with "Functional Scope" it will all go to the top of their function, even if they are wrapped in some kind of curly bracket.

***NOTES***

* `undefined` is a JavaScript primitive data type. 
* The Five JavaScript Primitives are `Number`, `String`, `Boolean`, `Undefined`, `Null`
* ES6 / es2015 tries to limit hoisting a little bit by changing the way scope works. We can touch upon that later. 

##### Part 2 - Closures / Callbacks / Higher Order Functions 

**Closures**

* Closure - a function nested inside of another function where. The inner function will have access to the variables from the outer function. The outer function cannot access the variables from the inner function

```
var first = function(){
	var x = 10
	
	var nestedFunc = function(){
		var y = 20
		
		console.log(x+y) 
	}
	
	console.log(x+y)
}
```
* the console.log inside of `nestedFunc` will give you 30. 
* The console.log at the bottom is not inside the closure. It belongs to `first` and does not have access to the variable y inside of `nestedFunc`

**Callbacks**

* A callback is a function that has been created and defined but NOT invoked.
* Callbacks are also known as "Higher Order Functions" but for the purpose of this course we will be sticking with the term "Callbacks".
* All callbacks are closures but not all closures are callbacks.
* Instead it is sitting around waiting to be "called back" by some sort of event such as a click event, or the invocation of another function. 
* See the calculator example from class below.

```
var add = function(a,b){
	return(a+b)
};

var sub = function(a,b){
	console.log(a-b)
};

var multi = function(a,b){
	console.log(a*b)
};

var calculator = function(a,b,callback){
	var myNum= 234
	var newVal = callback(a,b)
	
	return newVal
};

console.log(calculator(7,8,add))
```

***Five Min Exercise***

* Take the for loop below
* Adding a `setTimeout` function INSIDE of the for loop, make it console.log the numbers after two seconds
 
```
var myLoop = function(num){
	for (var i = 0; i<5; i++){
		console.log(i)
	}
}
```

***Answer***

```
var myLoop = function(num){
	for (var i = 0; i<num; i++){
		var printing = function(n){
			setTimeout(function(){
				console.log(n)
			}, 2000)
		}
		printing(i)
	}	
}

myLoop(5)
```

##### Part 3 - What is the DOM?

* DOM = Document Object Model
* This is a convention for how HTML elements are represented in the browser.
* Every element is its own "node".
* You can visualize them as a tree.
* Utilizing JavaScript we are able to navigate and access this tree.

***Five Min Exercise***

* Google these functions/methods and write down what they do; we will come back as a class and talk about them:
* Targeting
  * `document.getElementById`
  * `document.getElementsByClassName`
  * `document.getElementsByTagName`
  * `document.querySelector`
  * `document.querySelectorAll`
* Addition and Removal
  * `document.createElement`
  * `document.createTextNode`
  * `node.appendChild`
  * `node.removeChild`
  * `node.remove`
* Editing
  * `node.setAttribute`

##### Part 2 - Using DOM Methods

* Make two files. `index.html` and `main.js`
* Hook up your `main.js` file to your `index.html` file with a `script` tag at the bottom of the HTML
	* Why did I put the script tag at the bottom of the html?
* Whether you grab an element that already exist on the page or create a brand new element, all of these are just objects that you can store to a variable
* Try doing some of the things below using the JavaScript document methods you just researched.
	* Target specific element by id
	* Target elements by class
	* Target elements by tag
	* Create a div
	* Give div content
	* Give the div an attribute
	* Put the div somewhere

##### Part 3 - DOM EVENTS!!!

* Everything revolves around events. 
* How can we make a click event in vanilla JS?
* JavaScript comes with an `addEventListener` method.
	* You may see the method called `onClick` but we will not be using that.
	* Try to stay with addEventListener.
* `addEventListener()` - is attached to a targeted element and takes in two arguments.
	* The first argument is an event passed in as a string.
	* Some events are:
		* click
		* mouseover
		* mouseout
	* The second argument is a block of code that will be run when the event is starts.
	
```
var header = document.getElementById("myHeader")

var namedFunc= function(){
	alert("Does this work?")
}

header.addEventListener("click", namedFunc);

// header.addEventListener("click", function(){
// 	alert("Does this work?")
// })
```	
* In this example we have a element on the `html` page with an ID of `myHeader`
* We target that `DOM element` and store it to the `var header`
* Now we create a function that will call a JS method `alert` when invoked
* `alert` is a built in method that will pop up a box on the page
* Now we target the variable that stores that element, and attach an event listener to it

***NOTE***

* The first example is a `Named Callback`.
* the second example (commented out) is an `Anonymous Callback`.

##### Make a *FREE* Github.IO Home Page

* GitHub users are allowed to host a free home page at the URL `<your_username>.github.io`.
* This URL *serves* every file in a repository you create called `<your_username>.github.io`.
	* Go to `http://github.com/<your_username>`.
	* Create a new repository.
	* Call this repository `<your_username>.github.io`.
	* Clone it to your local development environment.
	* Create a file called `index.html`.
		* When a browser calls a location without specifying a resource, most servers default to responding with a page called `index.html`.
		* `index.html` is what will be displayed when someone points their browser at `<your_username>.github.io`.
* *Any* file you create will be viewable at the URL `<your_username>.github.io/<name_of_file>`.
	* This is also true of directories, i.e. `<your_username>.github.io/<name_of_directory>/<name_of_file>`.
	* A URL is *literally* a path to a `resource`, exactly mirroring your directory structure.
* Create another file, `cody-is-the-best.html`. Put some HTML in it.
	* How can you access this file with your browser?
* Within the `<your_username>.github.io` project, create a directory called `shenanigans`.
	* Within `shenanigans`, create another `index.html`.
	* What happens when you point your browser at `<your_username>.github.io/shenanigans/`?

Obviously, none of this works until you push the changes in your `<your_username>.github.io` repo to master. (Obviously.)
