from flask import Flask, render_template, request
import requests

app = Flask(__name__)

url_start = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='

@app.route("/", methods=["GET"])
def home_page():
    return render_template("index.html")

@app.route("/", methods=["POST"])
def searching():
    searched_expression = request.form["search_bar"]
    url = url_start + searched_expression
    r = requests.get(url)
    response = r.json()
    titles = response[1]
    links = response[3]
    link_list = []
    for index in range(len(titles)):
        for index in range(len(links)):
            link_list.append({"title": titles[index], "link": links[index]})
    print(link_list)
    return render_template("index.html", response=response, link_list=link_list)

if __name__ == "__main__":
    app.run(debug=True)
