import requests
import bs4
import lxml

nytimes_req = requests.get('http://api.nytimes.com/svc/news/{version}/content')

my_soup = bs4.BeautifulSoup(nytimes_req.text, 'xml')

