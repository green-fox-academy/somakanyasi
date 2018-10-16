
import requests
import bs4 as bs
import pandas

main_page = requests.get("http://tass.com")

content = bs.BeautifulSoup(main_page.text, "lxml")

divs = content.find_all('div')

data_pairs = []

for div in divs:
  anchors = div.find_all('a')
  if len(anchors) > 0:
    for anchor in anchors:
      if anchor.has_attr("href"):
        #print(anchor["href"])
        images = anchor.find_all('img')
        if len(images) > 0:
          for child in anchor.children:
            if child.name is not None and child.name == "img" :
              #print(child["src"])
              data_pairs.append([anchor["href"], child["src"]])
  

# print(data_pairs) IMADOM en is ;)

df = pandas.DataFrame(data_pairs, columns=['link', 'imagesource'])

# print(df.head(5))

print(df.groupby(['link', 'imagesource']).describe())