# Flask Microframework

### Learning Objectives
***Students will be able to...***

* Diagram the request response cycle
* Set up a Flask server
* Send data as JSON from a Flask server

---
### Context

* We are going to be Full Stack Web Developers

---

### Lesson

##### Part 1 - "What happens when I type google.com in the browser?"

* Lets take a look at this link? [https://github.com/alex/what-happens-when](https://github.com/alex/what-happens-when)

***Sum up the steps***

1. Your browser will begin to filter your key presses to show suggestions. Such as previous visits, popular sites, depending on the type of browser
2. Your browser will then parse the information. Think about how dynamic the url bar is. We don't need to type `http`, `https`, `www`, `.com` and the like.
3. Your browser will send a request to `HSTS - HTTP Strict Transport Security`. This is a list of websites with extra security and can only be contacted by `https`. You can tell a website is `https` if there is a light green bar on the left of the url. For example visit any major bank website. TD Bank, Chase, Bank of America, and the like.  
4. Then your computer sends a request to a `DNS - Domain Name Server`. This search will take the parsed information from the url bar and return an IP Address
5. Your browser now has the IP address and sends another request to that address. 
6. There are some handshakes that the two `resources` will send to authenticate each other. 
7. If everything goes well the server will send you back a response. Lets say it's an html file
8. Your browser accepts the HTML and begins to read it. 
9. It will then repeat this whole process for the links and script tags in the HTML

***NOTE***

* This is why AJAX is so popular. 
* Instead of receiving an html and having to do all these requests again, we'll just make requests to receive `JSON / XML` data
* Then the JavaScript file loaded in the browser will determine what it does with the data received

#### Part 2 - What Is Flask? Why do we need it?

* [Flask](http://flask.pocoo.org/) is a microframework written in Python.
* A microframework is a web application framework that prioritizes
speed, simplicity, and flexibility. Microframeworks are commonly used
to serve APIs and simple web applications. These days, they're also
commonly used to serve everything else.
* Every web application framework, in every language, manages the
following concepts:
	* routes
	* a request object
	* HTTP responses with HTML templates
	* JSON responses
	* object relational mapping
	* sessions
* Today in particular, we'll cover *routes*, *JSON* responses, and the
*request* object.

##### Part 3 - Routes

* A route is just a URL path -- the extra bit after `http://mywebsite.com`.
* It's not more than that, but every framework has a way to define what *routes*, or URLs, it responds to.
* In Flask, that way is a [decorator](http://python-3-patterns-idioms-test.readthedocs.io/en/latest/PythonDecorators.html)
called `@app.route()`.
* Examples:

```
@app.route('/')
"enter function here"

@app.route('/about')
"enter function here"

@app.route('/contact')
"enter function here"
```
* Each of these routes will have their own designated function/functions

##### Part 4 - URL Params

* We can make our routes more dynamic and include `url parameters`
* These are parameters will be values in the route that can be used in the corresponding function
* Here is an example from the `hello_world.py` file in the sample folder

```
@app.route('/<name>')
def hello_name(name):
    return 'Hello ' + name + '.'
```

***NOTES***

* Be careful with using these parameters. `<name>` is telling the server we will take any value after the `/`
* Notice you will get an error from Flask if you do the following

```
@app.route('/<name>')
def hello_name(name):
    return 'Hello ' + name + '.'
    
@app.route('/home')
def hello_name(name):
    return 'Welcome to my Home Page'
```
* The above code will be reading this as conflicting routes because <name> can be represented by any string. Including "home"


##### Part 5 - Sending JSON with Flask

* `JSON` - [JavaScript Object Notation](https://tools.ietf.org/html/rfc7159) is a specific kind of format data will be sent as. Very similar to dictionaries in Python
* To send a JSON response from Flask, use the function `jsonify()`.
* Congratulations, you've just built an API!

##### Part 6 - Request Object

* The *request object* is built from the [HTTP header](https://tools.ietf.org/html/rfc7230) of a request. 
* Every HTTP request and response has a header containing metadata, such as the
*method* of request (GET or POST), session data, query string, arguments, and form data.
* Flask stores request data in an object called `request`.
* We can look into the `request object` by targeting the specific keywords.

```
@app.route('/')
def hello_world():

    language = request.args.get('language')
    print(request)
    print(request.arg)
    print(request.method) 
```
* The above code is from the `hello_api.py` file in the sample folder. 
* Once you start the server and visit `localhost:5000` in your browser your terminal will print these statements

```
<Request 'http://localhost:5000/' [GET]>
ImmutableMultiDict([])
GET
```