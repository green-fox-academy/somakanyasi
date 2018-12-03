import scrapy
from selenium import webdriver

class UntappdCrawler(scrapy.Spider):
    name = "untappd"

    start_urls = [
        "https://untappd.com/MadScientistBeer/beer",
    ]

    def parse(self, response):

        for link in response.css('div.content'):
            

