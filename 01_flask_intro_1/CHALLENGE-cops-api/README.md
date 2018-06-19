Cops API
========

You may not have noticed, but in your last exercise you built an API!

Now let's make a better one. This API will use Pandas to analyze last
phase's cops data and return an appropriate response according to
three arguments in the query string: `year`, `column`, and `function`.

The API will run the requested function on the appropriate year and
column.

The functions you choose to implement are up to you.

The API will return a JSON object with keys `year`, `column`,
`function`, and `result`.

***tips***
* Remember that you can index a DataFrame.
* Remember the `.groupby()` method.
