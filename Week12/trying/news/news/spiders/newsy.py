import scrapy

class ClockChangeSpiderTest(scrapy.Spider):
    name = 'news'

    start_urls = [
        'https://24.hu/?s=%C3%B3ra%C3%A1t%C3%A1ll%C3%ADt%C3%A1s',
    ]

    def parse(self, response):
        for item in response.css('h3.post-title-small'):
            next_page = item.css('a::attr(href)').extract_first()
            yield response.follow(next_page, self.parse_article)

    def parse_article(self, response):
        for title in response.css('')
            # yield {
            #     "title": item.css('a::text').extract_first(),
            #     "link": item.css('a::attr(href)').extract_first(),
            # }

        


