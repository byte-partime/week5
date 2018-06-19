Render a Form and Respond to POST
=================================

Write a form and a corresponding route.

The form should accept two inputs, as well as "submit". The first
input is a category, and the second input as a thing in that category,
such as "candy" and "peanut m&m's" or "Slinky" and "cat".

The route in `favorites.py` should return the form in response to a
GET request. For a POST request, it should read the form data and
print the string "My favorite CATEGORY is THING." ie "My favorite CAT
is SLINKY." or "My favorite CANDY is ALMOND JOY."

Dress up your templates by copying your base.html from the previous
exercise and inheriting from that.
