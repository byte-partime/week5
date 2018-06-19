# Flask Part Dos

### Learning Objectives
***Students will be able to...***

* Render HTML files from Flask
* Read through the request object
* Utilize the different HTTP verbs
* Submit an HTML form to your Flask server / request object

---
### Context

* Continuing to be Full Stack Web Developers

---
### Lesson

##### Part 1- Front End Vs Back End

* By now we've discussed the differences between the two. 
* Flask is a Python server framework we will be using to set up the Back End of our websites. 
	* How do we break down user requests
	* How do we talk to a database if needed
	* What kind of responses do we give back
* The Front End comprises of how that information is displayed to the user. So far we've done this using HTML / CSS / and JS. 
	* How does the website work
	* How can the user interact with the website
	* How do we accept user input to send to our server
* With the emergence of frameworks such as React, Angular, and Backbone, much of the logic we would have done in the back end has moved to the front. 

##### Part 2 - Refresher code from yesterday's lesson

```
from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/<rule>')
def root_route(rule):
  return jsonify(rule=rule)

if __name__ == "__main__":
  app.run(debug=True)
```

##### Part 3 - HTML Forms

* You have built html files before. And utilized forms there. 
* Now we're going to input the type of HTTP method into our forms
* HTML forms can only utilize GET and POST methods

```
<form action='/' method='POST'>
  <input name='asteroid'>
  <input type='submit'>
</form>
```
* HTML *tags* may have key=value *attributes*. This form's *action*
attribute to to send data to our app's root url, or `/`. This form's
*method* attribute is *POST*.
* The first input has a *name* attribute with the value "asteroid".
* Flask can access our form data through the `form` dictionary of the
`request` object. We can access the user's 'asteroid' input with
`request.form['asteroid']`.

##### Part 4 - Templates

* Flask uses a [templating engine](http://jinja.pocoo.org/docs/dev/templates/) called *jinja2*. It allows you to insert dynamic (changing) data into an HTML
response. 
* The flask method you'll import for this is called
`render_template`. 
* By default, Flask expects templates to be stored in
a module-level directory called `templates`.
* `render_template()` takes a template file as its first argument, and
then any amount of keyword arguments (remember \*\*kwargs?). 
* The values of these keyword arguments can then be inserted into a template
with double curly braces.

```
return render_template('template.html', name='Kevin', species='duck')
```

```
	<!-- template.html -->
	<p>{{ name }} is a {{ species }}.</p>
```

* The jinja2 engine also offers *template inheritance*. An example of
template inheritance is in the `samples` directory.
* In jinja2, *logic* goes between curly-brace-modulos, ie `{% this_is_some_logic %}`, and *data* goes between double-curly-braces, ie `{{ this_is_some_data }}`.

##### Part 5 - GET and POST 

* *GET* and *POST* are the two primary types of HTTP requests. 
* As mentioned earlier they are the only two you can stick into an HTML form. (this doesn't mean there aren't more, such as PUT and DELETE)
* You've seen both in your previous work with APIs. 
* A GET request asks for data
* A POST request sends data to be handled.
* Flask can check the method of a request through the `.method` property
of the `request` object, and respond appropriately.
