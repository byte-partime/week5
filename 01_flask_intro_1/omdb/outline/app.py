import models, queryOMDb

from flask import Flask, jsonify, request

app = Flask(__name__)

# example code in README
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



