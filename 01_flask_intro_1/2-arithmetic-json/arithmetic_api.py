from flask import Flask, jsonify, request

app = Flask(__name__)

# example use of request object
# test this route with localhost:5000/favorites?name=andrew&food=cereal
@app.route('/favorites')
def favorite_things():
    name = request.args.get('name') or 'sally'
    food = request.args.get('food') or 'cookies'
    show = request.args.get('show') or 'scrubs'
    return jsonify(
        name=name,
        food=food,
        show=show,
    )

if __name__ == "__main__":
    app.run(debug=True)
