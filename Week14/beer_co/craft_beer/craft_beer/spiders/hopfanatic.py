import scrapy
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os


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

os.environ['webdriver.chrome.driver'] = '/Users/somakanyasi/Downloads/chromedriver'

driver = webdriver.Chrome()
driver.get('http://www.hopfanatic.com/soreink/')
# assert "Söreink | Hopfanatic" in driver.title

driver.close()

