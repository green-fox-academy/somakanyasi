from flask import Flask, render_template, request
import requests

app = Flask(__name__)

url_start = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='

@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")



if __name__ == "__main__":
    app.run(debug=True)
