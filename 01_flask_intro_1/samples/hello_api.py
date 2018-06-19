from flask import Flask
from flask import jsonify
from flask import request

app = Flask(__name__)

hellos = {
    'english': 'Hello world.',
    'spanish': 'Hola mundo.',
    'french': 'Bonjour le monde.',
    'german': 'Hallo welt.',
    'italian': 'Ciao mondo.',
    'chinese' : '你好世界',
}

@app.route('/')
def hello_world():

    language = request.args.get('language')
    print(request)
    print(request.args)
    print(request.method)
    
    response = hellos.get(language) or hellos['chinese']

    return jsonify(name=response)


if __name__ == "__main__":
    app.run(debug=True)
