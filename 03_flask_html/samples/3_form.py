from flask import Flask, request, render_template
app = Flask(__name__)

@app.route('/', methods=['POST', 'GET'])
def form_handler():
    if request.method == 'POST':
        candy = request.form['candy']
        return render_template('3_response.html', candy=candy,)
    # If it's not a POST request, it must be a GET request.
    return render_template('3_form.html')

if __name__ == "__main__":
    app.run(debug=True)
