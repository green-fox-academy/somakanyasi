from flask import Flask, render_template, jsonify, json, request
from flask_cors import CORS
import requests
import lxml
import cgi, cgitb
import os

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")

@app.route('/city', methods=["POST"])
def city_display():
    chosen_city = request.form["city"]
    country_code = request.form["country_code"]
    print(chosen_city)
    r = requests.get('https://api.openweathermap.org/data/2.5/weather?q='+chosen_city+','+country_code+'&units=metric&appid=25dfbbf7d7f7ddb9b7494961dfd68d99')
    print(r)
    json_object = r.json()
    print(json_object)
    temp = json_object["main"]["temp"]
    descript = json_object["weather"][0]["description"]
    temp_min = json_object["main"]["temp_min"]
    temp_max = json_object["main"]["temp_max"]
    return render_template("weather.html", city=chosen_city, current_temp=temp, description=descript, temp_min=temp_min, temp_max=temp_max)

if __name__ == '__main__':
    app.run(debug=True)