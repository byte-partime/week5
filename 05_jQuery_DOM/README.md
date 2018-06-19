# We are WRAPPING IT IN CA$H

### Learning Objectives
***Students will be able to...***

* jQuery Selectors
* jQuery Methods
* jQuery DOM
* Common jQuery uses
	* registering events (such as click events)
	* Add child elements to a div
	* remove child from a div
	* edit existing elements

---

### Context

* jQuery is used EVERYWHERE!!!

---

### Lesson

##### Part 1 - What is jQuery

* jQuery is a library
* We've been dealing with libraries since the first week of learning Python
* Libraries are just giant code bits that somebody else wrote to make our lives easier
* In the sense of JavaScript you may have to do several nested loops just to grab an element from the DOM. Something that can be solved with the `$` in jQuery
* jQuery is not only useful for helping to organize our own code but it is extremely popular with other JavaScript (and CSS) frameworks.
	* [Bootstrap](http://getbootstrap.com/)
	* [D3.js](https://d3js.org/)
	* [Foundation](http://foundation.zurb.com/)

##### Part 2 - jQuery download

* jQuery sounds pretty amazing. How do we link this to our file?
* Well, the same way we can link our own JavaScript file. With the script tag

```
	<script type="text/javascript" src="main.js"></script>
```
* `IMPORTANT` your JS script will come AFTER any other 3rd party scripts such as jQuery.

----------

***Think-pair-share***
* Why must your JavaScript files come sequentially after the jQuery script tag? Like this:
```
	<script type="text/javascript" src="jquery.min.js"></script>
	<script type="text/javascript" src="main.js"></script>
```

----------

* Visit the jQuery website and download the latest version of jQuery.
* The location you put that in your computer you can now link it in the `src` attribute of the script tag
* Negatives
	* For organization you may have a jQuery file in each app folder
	* We'll have to gitignore the jQuery file every time we push to github
	* Also when we host our projects online we'll have to push our jQuery file to the server
* How can we fix this?!?!?

##### Part 3 - Save Us CDNs!!!

* CDN stands for Content Delivery Network
* [jQuery CDN from cdnjs](https://cdnjs.com/libraries/jquery/)
* A CDN is a network where all these giant libraries/files are stored in some cloud somewhere.
* We are able to access and use the libraries by linking to these CDNS

----------

***Five Min Exercise***

* Make an index.html file
* Make a main.js file
* Link the main.js file to the index.html file
* Make boilerplate HTML template in your index.html file
* Enter the following code in your main.js file
* DO NOT copy and paste this, type the whole thing out

```
$(document).ready(function(){
	$("body").append("<h1>HELLO WORLD</h1>")
})
```
* Open the html file in your browser and check the console
* Link a jQuery file or CDN to the html
* Does it work now?

----------

***NOTE***

* $(document).ready() is SIMILAR to window.onload in vanilla javascript
* The biggest difference is document.ready does not wait for as much content to load as the window.onload function.
* Check out this [Stack OverFlow Answer](http://stackoverflow.com/questions/3698200/window-onload-vs-document-ready) below.

```
The ready event occurs after the HTML document has been loaded, while the onload event occurs later, when all content (e.g. images) also has been loaded.

The onload event is a standard event in the DOM, while the ready event is specific to jQuery. The purpose of the ready event is that it should occur as early as possible after the document has loaded, so that code that adds functionality to the elements in the page doesn't have to wait for all content to load.
```

***NOTE NUMBER TWO***

* You may see some people do this:

```
$(function(){})
```
* We DO NOT use this syntax b/c it's a dumb shorthand and confusing.
* It acts the same as `document.ready` so just use `document.ready`

##### Part 4 - Let's talk about $$$$$$

* How did we manipulate the DOM using vanilla JS yesterday?
	* document.getElementById()
	* document.getElementsByClassName()
	* document.createElement()
	* AND OTHERS
* jQuery takes all of these methods and wraps them into a single statement `$`
* The most often used jQuery statement is the `$`
* `$` tells us we are accessing jQuery.
* We follow the `$` with a `(selector)`. This is grabbing an HTML element.
* We can then follow this with a method that we want to do. e.g. append, remove, and the like
* Open the index.html file with the jQuery CDN and go into the inspector
* Play around with jQuery

```
var $body = $('body')
var $h1 = $('h1')
```
* We also use `CSS` selectors to identify elements with id's and or classes
* Here are some examples

```
var $menu = $("#menu");

var $heading = $("h1");

var $paragraph = $("article.p");

var $listItems = $("ul li");
```

***NOTE***

* Why are there `$` in front of the variable names?
* It's a JavaScript convention with naming variables. 
* If a variable is a `jQuery Object` we will put a `$` in front of the variable name
* Keep in mind this does NOT have any effect on the value itself. It's just a naming convention.
* Check out this StackOverFlow Answer for more information

----------

***Five-minute exercise***
* in main.js file you created in the last five-minute exercise, try to use jQuery to add an `<li>` to the `<ul>` that's contained within `index.html`.

----------

##### Part 5 - Event Delegation

* Lets take a look at the example code

```
	var $z = $('li')

	$.each($z, function(x,y){
		y.addEventListener('click',function(){
			alert("BLAH")
		})
	})
```
* The above code tells us that any "list item" element that is clicked should alert "BLAH"
* Now lets add some more functionality (NOT inside the .each, but underneath as separate variables and functions)

```
	var $add = $('#blah');
	var $addTo = $('#list');

	$add.click(function(){
		console.log("this working")
		var $li = $('<li></li>')
		$li.text("I AM NEW")
		$addTo.append($li)
	})
```
* The above code says any time the user clicks the element with an id of "blah" we will create a new list item and append it to the element with an id of "list"
* Go ahead and try this out
* Great we're getting new list items,
* Wait a second, why are my new list items not clickable and showing an alert with "BLAH"?
* This is because when that first piece of code runs it grabs all the "li's" and adds the event listener to those elements.
* Since the li's that are being created weren't around when the first code runs, then will not have the event listener.

***SOLUTION 1***

* we can edit the second piece of code to have add a event listener to each list item when they are created
* It may look something like this

```
	var $add = $('#blah');
	var $addTo = $('#list');

	$add.click(function(){
		console.log("this working")
		var $li = $('<li></li>')
		$li.text("I AM NEW")
		$li.click(function(){
			alert("BLAH")
		})
		$addTo.append($li)
	})
```
* This works but we don't want to keep adding and removing event listeners to each element. 

***SOLUTION 2***

* Instead of adding an event listener to every list item, what if we just added ONE event listener to the parent element, the unordered list
* Let's comment out the `.each` example from earlier that added an event listener to every `li` item
* Instead we're going to target just the parent container, the `ul`

```
	$addTo.click(function(event){
		console.log(event)
		console.log(event.target)
	})
```
* You can then store the event.target in a variable to use however you want inside of that callback function

----------

##### Part 6 - capturing events, adding elements, removing elements, editing elements.

* Yesterday's Star Wars exercise had you do four main things with JavaScript:
	1. Capture events
	2. Add elements to the DOM
	3. Remove elements from the DOM
	4. Edit elements in the DOM
* Let's look at how we did that with JavaScript, then we'll take a look at jQuery syntax

***`Capturing events:`***

```
// JavaScript
tatooine.addEventListener('click', findLuke);
```

```
// jQuery
$('#tatooine').on('click', tatooineClicked);
```
***`Add elements to the DOM:`***

```
// JavaScript
newDiv = document.createElement("div");
newContent = document.createTextNode("jeff");
newDiv.appendChild(newContent);
```

```
// jQuery
$('#falcon').append("<div class='heroes'>" + millenium[i] + "<div>");
```
***`Remove elements from the DOM:`***

```
// JavaScript
var jedis = document.getElementsByClassName('jedi');
var curDiv;
while (jedis.length > 0) {
	curDiv = jedis[0];
	tatooine.removeChild(curDiv);
}
```

```
// jQuery
$('.jedi').remove();
```
***`Edit DOM element:`***

```
// JavaScript
div.setAttribute("class", "jedi");
```

```
// jQuery
$( "p" ).addClass( "myClass yourClass" );
```

##### Part 5 - Other cool jQuery syntax which will be helpful

* The following code will get the element with the `id` attribute of `falcon`, it will look for all the child `div`'s of that element, and it will add the class `heroes` to all those divs.

```
$("#falcon > div").addClass("heroes");
```

* The following code will target the element with the `id` attribute of `falcon`. It will then take all the entire element with `id` of `jedi`, and all it's child elements, remove that element from where ever it is in the DOM, and append it to the `falcon` element.

```
$("#falcon").append(
    $(".jedi")
);
```
