import scrapy
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import os
import sys


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

# os.environ['webdriver.gecko.driver'] = '/Users/somakanyasi/Downloads/geckodriver'

# PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
# DRIVER_BIN = os.path.join(PROJECT_ROOT, "/Users/somakanyasi/Downloads/geckodriver")

driver = webdriver.Chrome()
driver.get('http://www.hopfanatic.com/soreink/')
assert "Söreink | Hopfanatic" in driver.title

driver.close()

