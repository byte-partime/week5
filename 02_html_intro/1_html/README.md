# Intro to HTML 

### Learning Objectives
***Students will be able to...***

* Write the boilerplate for an html document
* Utilize HTML and HTML5 tags
* Use inline and block elements with semantic tags

---
### Context

* HTML is not considered a programming language but it is the format of how we visualize information on the web

---
### Lesson

##### Part 1 - HTML Introduction

***What is HTML***

* HTML stands for Hyper Text Markup Language.
* HTML is a `string` read by your browser. 
* The browser interprets this string and renders everything in the browser window.
* Every browser renders HTML differently.
* A `heading` tag may have different sizing and spacing on Chrome vs. Firefox vs. IE, and the like

***Is HTML Programming?***

* Is HTML a programming language? Why or why not?
* HTML is NOT a programming language
* It is not used to perform any logic
* It's only purpose is to display elements in the browser
* Think of this as being similar to PDFs

***HTML TREE***

* Your HTML document will consist of various `elements`
* These `types` of elements are indicated through the words in the `tag` in between the `<>`

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	
</body>
</html>
```

* All HTML files will have three main elements
* `html` 
	* tells us it's an html document
* `head`
	* The top of your document
	* Consists mainly of elements that will connect the document to other files 
	* This is where you can attach your `css` files
	* Much of what goes in the head tag is not seen by the user
	* The only real `tag` that will show to the user may be the `<title></title>` tag
		* This is the name of the tab for the browser
* `body` - The bottom of your document
	* Consists mainly of elements you want to display
* Elements can be nested
	* The outer element will be the parent and the child elements are those that are contained within

***What are some HTML Tags***

* HTML tags tell the browser how to render the content within
* Almost all tags have an opening and a closing tag

```
	* div
	* ul
	* li
	* h1
```
* Some tags have attributes you can populate

```
	* a tag with href
	* img tag with src
```

##### Part 2 - HTML5 Intro

* HTML5 is a set of standards that represents the best implementation of HTML.
* It allows us to have more similar presentation among different browsers
* HTML5 also allows for easier collaboration between browsers AND users
* They do this using `Semantic Tags`

***What are Semantic Tags?***

* HTML5 comes with Semantic Tags which are more descriptive tags for our HTML markup.
* Semantic tags allow us to provide more information in our HTML markup without changing the structure of the page
	* If you had a large HTML file you might want to wrap elements in semantic tags rather than using `div` a million times.
* All browsers will display HTML elements slightly different. Semantic tags are also used to help make these elements appear as close as possible cross browser.
* Semantic tags are great for the browser, and the user themselves to know what is going on
* Here are some examples of semantic tags

```
	* article
	* section
	* header
	* footer
	* nav
	* aside
```

***Why Semantic Tags?***

* Take a look at the `index.html` file in this folder
* Imagine if all the `<section>`, `<header>`, `<nav>`, `<footer>` tags were just `<divs>`
* That would be pretty hard to read as a programmer and not very descriptive of what the content inside the tags are for


##### Part 3 - Very Important Notes For HTML Knowledge!!!

* Almost all elements default to TWO different `display` types
* Inline Elements vs Block Elements
* Block element
	* An element that cannot have anything next to it even if it does not reach the full width of it's parent container
	* e.g. `div`, `h1`
* Inline Element
	* This element will be called right after/next to the element it is behind in the html file
	* e.g. `a href`
	
##### Part 4 - Common HTML Tags and their descriptions

***Block Elements***

* header - A semantic tag. Use this to indicate the "header" of the page
* nav - A semantic tag. Use this to indicate the content inside belongs to a navigavtion bar
* ul - A html tag. Stands for Unordered list. Usually has list item elements inside
* ol - A html tag. Stands for Ordered list. Usually has list item elements inside
* li - A html tag. Stands for list item. Usually nested inside of a UL or OL. Will have bullets or numbers depending on the type of parent
* div - A html tag. Stands for division. Usually used to indicate a section or piece of the page
* section - A semantic tag. Use to indicate a section of the page
* article - A semantic tag. Use to indicate a section of the page
* h1 - h6 - A html tag. These are heading tags. h1 is the largest, h6 is the smallest
* p - A html tag. Paragraph tag. Stick some text in here

***Inline Elements***

* a - A html tag. This is a link tag. You can pass it an attributes `href` which will hold a link that the user will be sent to.
* img - A html tag. Give this a `src` attribute that can target a image file on your computer, or through a link online
* strong - A html tag that will bold any text inside of it. You may put this inside of text in a paragraph tag to bold a certain word or sentence
* button - A html tag that will render a default styled button

***There are many more HTML tags out there, feel free to play around with these or explore others on your own***

## To see how an HTML file will look have it open in your text editor (sublime / atom / VS code). Right click and go to "Open in browser"