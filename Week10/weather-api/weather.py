from flask import Flask, render_template, jsonify, json, request
from flask_cors import CORS
import requests
import lxml
import cgi, cgitb
import os

app = Flask(__name__)
CORS(app)

weather_req = requests.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99')

print(weather_req.json())

@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")

# @app.route("/select", methods=["GET"])
# def selection():
#     return render_template("weather.html", city=(weather_req.json()["name"]), adat=(weather_req.json()["main"]), current_temp=(weather_req.json()["main"]["temp"]), description=(weather_req.json()["weather"][0]["description"]), temp_min=(weather_req.json()["main"]["temp_min"]), temp_max=(weather_req.json()["main"]["temp_max"]))


# @app.route("/weather", methods=["GET"])
# def return_with_weather():
#     response = app.response_class(
#         response=json.dumps(requests.get('https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99').text),
#         status=200,
#         mimetype='application/json'
#     )
#     return response

@app.route('/city', methods=["POST"])
def city_display():
    chosen_city = request.form["city"]
    print(chosen_city)
    r = requests.get('https://api.openweathermap.org/data/2.5/weather?q='+chosen_city+',hu&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99')
    print(r)
    json_object = r.json()
    temp_k = json_object["main"]["temp"]
    descript = json_object["weather"][0]["description"]
    temp_min = json_object["main"]["temp_min"]
    temp_max = json_object["main"]["temp_max"]
    print(temp_k)
    return render_template("weather.html", city=chosen_city, current_temp=temp_k, description=descript, temp_min=temp_min, temp_max=temp_max)

if __name__ == '__main__':
    app.run(debug=True)