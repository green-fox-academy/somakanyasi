import scrapy

class ClockShiftBorsOnline(scrapy.Spider):
    name = 'bors'

    start_urls = [
        'http://www.borsonline.hu/kereses?keyword=%C3%B3ra%C3%A1t%C3%A1ll%C3%ADt%C3%A1s',
    ]

    def parse(self, response):
        for article in response.css('div.article-result__content'):
            page = article.css('a::attr(href)').extract_first()
            yield response.follow(page, self.parse_article)

    def parse_article(self, response):
        for item in response.xpath('//div[@class=]')
        /html/body/div[3]/main/div/div

