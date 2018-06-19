from flask import Flask
from flask import jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return jsonify(erro='warld')

if __name__ == "__main__":
    app.run(debug=True)
