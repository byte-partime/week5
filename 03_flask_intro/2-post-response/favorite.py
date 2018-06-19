from flask import Flask, request, render_template
app = Flask(__name__)

'''
# Define your route.
# Define what request methods you'll accept.
# Respond to GET and POST requests with separate logic.
# If necessary, read form data.
# return a rendered template.
@app.route()
def do_form_stuff():
    pass
'''

if __name__ == "__main__":
    app.run(debug=True)
