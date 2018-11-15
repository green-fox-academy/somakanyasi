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

# os.environ['webdriver.chrome.driver'] = '/Users/somakanyasi/Downloads/chromedriver'

PROJECT_ROOT = os.path.abspath(os.path.dirname(__file__))
DRIVER_BIN = os.path.join(PROJECT_ROOT, "/Users/somakanyasi/Downloads/geckodriver")

driver = webdriver.Firefox(executable_path = DRIVER_BIN)
driver.get('http://www.nemzetisport.hu')
# assert "Google" in driver.title

driver.close()

