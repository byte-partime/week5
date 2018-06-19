from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def raw_template():
	person = {
		"name" : "Scarlett Johanson",
		"spouse" : "Jason Ng",
	}
	return render_template('1_basic_sample.html', person=person)

if __name__ == "__main__":
	app.run(debug=True)	
