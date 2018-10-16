from flask import Flask, render_template, jsonify, json
from flask_cors import CORS
import requests
import lxml

app = Flask(__name__)
CORS(app)

weather_req = requests.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99')

print(weather_req.json()['main'])

@app.route("/", methods=["GET"])
def template_test():
    return render_template('weather.html', adat=weather_req.json()['main'])


if __name__ == '__main__':
    app.run(debug=True)