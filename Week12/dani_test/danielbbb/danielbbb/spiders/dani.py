import scrapy

class DaniArticleSpider(scrapy.Spider):
    name = 'dani'

    start_urls = [
        'https://www.szeretlekmagyarorszag.hu/',
    ]