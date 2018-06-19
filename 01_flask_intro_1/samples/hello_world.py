from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello world!'

@app.route('/<name>')
def hello_name(name):
    return 'Hello ' + name + '.'

@app.route('/default/<user>/<age>')
def create_user(user, age):
	
	return "You have just created the user " + user + ". They are " + age + " years old"

if __name__ == "__main__":
    app.run(debug=True)
