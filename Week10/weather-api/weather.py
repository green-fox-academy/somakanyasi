from flask import Flask, render_template, jsonify, json, request
from flask_cors import CORS
import requests
import lxml

app = Flask(__name__)
CORS(app)

weather_req = requests.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99')

print(weather_req.json())

@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")

@app.route("/select", methods=["GET"])
def selection():
    return render_template("weather.html", city=(weather_req.json()["name"]), adat=(weather_req.json()["main"]), current_temp=(weather_req.json()["main"]["temp"]), description=(weather_req.json()["weather"][0]["description"]), temp_min=(weather_req.json()["main"]["temp_min"]), temp_max=(weather_req.json()["main"]["temp_max"]))


@app.route("/weather", methods=["GET"])
def return_with_weather():
    response = app.response_class(
        response=json.dumps(requests.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99').text),
        status=200,
        mimetype='application/json'
    )
    return response

if __name__ == '__main__':
    app.run(debug=True)