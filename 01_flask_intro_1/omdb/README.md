# Quiz Week4

Go to:

http://www.omdbapi.com/apikey.aspx

and register an API key (choose FREE! option)

Once you are registered - you can access the OMDb API!

Check out the API http://www.omdbapi.com/

If you wanted to search for Inglourious Bastards - you'd hit the URL:
```
http://www.omdbapi.com/?t=inglourious&apikey=[yourkey]
```
Your task is as follows:
* You will make an API that stores a private movie collection!
* Create a DB as we have in prior exercises. The DB should have 5 tables:
 * Movies, Actors, Directors, and two many-to-many relationship tables
 * Movies_Actors, Movies_Directors
* Use the DAO structure and an MVC pattern. This time incorporate Flask and RESTful APIs.
* Note that the OMDb API provides more information that we need, but we also want a bit more structure in our DB than in their API - there can be more than one Actor or Director in a given film - and we want a unique record for each in a DB.
* The Flask application should allow you to add a movie to the DB (your collection) along with seeding (if necessary), all the accompanying information relevant to the film - actors and directors.
* The application should allow you to search the DB for movies, actors, and directors, as well as counts of each.
* When searching for movies, the search can either be for movies in general (the OMDb API) or for those in the DB. We are going to employ the format outlined in the code snippet below:

app.py
```

.....

@app.route('search-movie/<movie>/<search_type>', methods=['GET'])
def search_movie(movie, search_type)
    
    if search_type=='1':
        '''
        Call on the models to retreive the movie title from db
        '''
    elif search_type=='2':
        '''
        Call on queryOMDb to search for the movie title on OMDb API
	'''
    else:
        response = jsonify(error="choose 1 or 2 as search type")
        response.status_code = 404
        return response
```

What are we doing? the route method take a URl:
```
http://localhost:5000/movie/1
```
In addition to the movie variable (it is created via URL converters - the syntax <variable> converts the string in that position in the URL to a python variable that can be passed as an argument to the route method) - we are passing the 'search_type' variable that will be used to choose the type of search. If search_type=='1' - we want to query our local DB - elif search_type=='2' - hit the OMDb API, otherwise return an error message.
* The actual classes (and methods) will be in other modules imported by app.py, models.py for DB querying, and another file where we code for executing this query from the OMDb API. 
* The JSON object returned for both queries should be uniform, so you will have to use the OMDb API JSON object to build a new one with just the information that we want (that we use in our DB) - movies, actors, year, runtime, directors.

Good luck!
