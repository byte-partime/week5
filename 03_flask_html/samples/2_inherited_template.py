from flask import Flask, render_template
app = Flask(__name__)

@app.route('/<grandpa_says>')
def inherited_template(grandpa_says):
    return render_template( '2_content.html',
                    grandpa=grandpa_says,
                    )

if __name__ == "__main__":
    app.run(debug=True)
