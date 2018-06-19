'''
inherited_templay.py

This file uses Flask's `render_template()` method to insert variables
into a template.
'''
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def display_inherited_template():
    title = '!!! TITLE !!!'
    header = 'I am a Boring Header'
    content = 'Ask the duck.'
    return render_template(
                        'content.html',
                        title=title,
                        header=header,
                        content=content,
                        )

@app.route('/this-one-handles-a-form', methods=['POST', 'GET'])
def form_thing():
    '''
    request.form['candy'] # if no 'candy' then KeyError
    request.form.get('candy', 'snickers') # same as line 25
    '''
    if request.method == 'GET':
        return 'oh noes a get i can not deal with it!!!'
    candy = request.form.get('candy') or 'snickers'
    return render_template(
                        'content.html',
                        title='candy form result',
                        header='your favorite candy',
                        content=candy,
                        )

@app.route('/content2')
def content2():
    return render_template(
                        'content.html',
                        title='kenso title',
                        header='something right',
                        content='the duck won\'t listen',
                        )

if __name__ == "__main__":
    app.run(debug=True)
