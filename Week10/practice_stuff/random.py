from flask import Flask, render_template, jsonify, json, request
import requests
import cgi

app = Flask(__name__)

@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)

