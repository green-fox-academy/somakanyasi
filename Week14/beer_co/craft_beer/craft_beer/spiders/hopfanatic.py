import scrapy

class HopFanaticCrawler(scrapy.Spider):
    name = "hopfanatic"

    start_urls = [
        'http://www.hopfanatic.com/soreink/',
    ]

    def beer_parse(self, response):
        print(response)
