Arithmetic JSON
=================

Build an arithmetic API with four endpoints:
* `/add`
* `/subtract`
* `/multiply`
* `/divide`

Each endpoint will use the *request* object to check for two arguments
in the query string: `num1` and `num2`.

The endpoint will perform appropriate arithmetic on the arguments and
return a JSON response with keys `expression` and `result`.

* The value of `expression` is a string of the operation performed.
* The value of `result` is the result of using the appropriate
  mathematical operator.

For example, the URL `http://localhost:5000/add?num1=50&num2=75`
should show this response

```
{
  "expression": "50 + 75",
  "result": "125"
}
```
