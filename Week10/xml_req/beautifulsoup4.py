import requests
import bs4
import lxml
import pandas as pd

nytimes_req = requests.get('http://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml')

my_soup = bs4.BeautifulSoup(nytimes_req.text, 'xml')

# print(my_soup)

items = my_soup.find_all('item')

# print(items)

for i in items:
    print(i.title.text)
    print('    ' + i.link.text)

tag_list = []

for item in items[10].children:
    if item.name:
        tag_list.append(item.name)

# print(tag_list)

full_list = []

for item in items:
    item_list = {}
    for child in item.children:
        for tag in tag_list:
            if tag == child.name:
                if tag == 'category':
                    category_list = []
                    category_list.append(child.text)
                # print(child.text)
                item_list.update({tag: child.text})
    full_list.append(item_list)

print(full_list[0], full_list[1])


df = pd.DataFrame(full_list, columns=tag_list)
pd.set_option('display.max_columns', 15)

print(df.head(5))