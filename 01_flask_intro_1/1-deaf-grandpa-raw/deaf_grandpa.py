from flask import Flask, request

app = Flask(__name__)


# This is an example of a variable rule.
@app.route('/sample/<sample>')
@app.route('/sample')
def sample_route(sample='hi i am a sample'):
    return sample

if __name__ == "__main__":
    app.run(debug=True)
