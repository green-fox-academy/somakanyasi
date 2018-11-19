# import scrapy
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import pymongo
# import os
# import sys


# class HopFanaticCrawler(scrapy.Spider):
#     name = "hopfanatic"

#     start_urls = [
#         'http://www.hopfanatic.com/soreink/',
#     ]

#     def parse(self, response):
#         beer_names = []
#         container = response.css('#themify_builder_content-111')
#         for name in container:
#             print(name)
#             print('------------------------------------------------------OOO---------------------------------------------------------')
#             title = response.css('h1::text').extract_first()
#             beer_names.append(title)
#         print(beer_names)
# executable_path = DRIVER_BIN

# print(sys.path)

MONGO_URI = 'mongodb://ec2-35-158-191-40.eu-central-1.compute.amazonaws.com:27017/'
MONGO_DATABASE = 'soma_beer_test'

client = pymongo.MongoClient(MONGO_URI)

database = client[MONGO_DATABASE]

# os.environ['webdriver.gecko.driver'] = '/Users/somakanyasi/Downloads/geckodriver'

# PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
# DRIVER_BIN = os.path.join(PROJECT_ROOT, "/Users/somakanyasi/Downloads/geckodriver")

driver = webdriver.Chrome()
driver.get('http://www.hopfanatic.com/soreink/')
assert "Söreink | Hopfanatic" in driver.title

beer_names = []
beer_types = []
datas = []
descriptions = []

for i in range(1,10):
    beer_names.append(driver.find_elements_by_xpath("//*[@id='text-111-"+ str(i) +"-1-2']/h1/strong"))
    beer_types.append(driver.find_elements_by_xpath("//*[@id='text-111-"+ str(i) +"-1-3']/h3"))
    descriptions.append(driver.find_elements_by_xpath("//*[@id='text-111-"+ str(i) +"-1-5']/p"))
    datas.append(driver.find_elements_by_xpath("//*[@id='text-111-"+ str(i) +"-1-7']/h4"))
    

print(len(beer_names))
print(len(beer_types))
print(len(datas))
# print(beer_names[0].text)

for element in beer_names:
    if element:
        print(element[0].text)

for i in range(0, 9):
    item = {}
    if beer_names[i]:
        item['beer_name'] = beer_names[i][0].text
    if beer_types[i]:
        item['beer_type'] = beer_types[i][0].text
    if datas[i]:
        item['bitterness'] = datas[i][0].text.replace(' IBU', '')
        item['color'] = datas[i][1].text.replace(' EBC', '')
        item['alcohol_vol'] = datas[i][2].text.replace('ALK.: ', '').replace(' V/V', '')
    if descriptions[i]:
        item['description'] = descriptions[i][0].text
        item['brewery'] = "Hopfanatic"
        item['vol'] = '0,33'
    database["scrapy_items"].insert_one(item)

client.close()
driver.close()

