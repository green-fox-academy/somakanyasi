import requests
import lxml
from bs4 import BeautifulSoup

url = "https://www.yellowpages.com/search?search_terms=coffee&geo_location_terms=Los+Angeles%2C+CA"
r = requests.get(url)

soup = BeautifulSoup(r.content, 'xml')

links = soup.find_all("a")

for link in links:
    print("<a href='%s'>%s</a>" %(link.get("href"), link.text))

