import scrapy

class BeerCrawler(scrapy.Spider):
    name = "mad_scientist"

    start_urls = [
        'http://madscientist.hu/termekeink/',
    ]

    def parse(self, response):
        for link in response.css('div.col-xs-12'):
            next_page = link.css('a.card--product::attr(href)').extract_first()
            yield response.follow(next_page, self.parse_beer)

    def parse_beer(self, response):
        url = response.url
        brewery = "Mad Scientist"
        beer_name = response.css('h1::text').extract_first()
        # for item in response.css('div.product__data ul').extract():
        #     print(item[0])
        #     print(item[1])
            print('OOOOOOOOOOOOOOOOOOOOOOO--------------------------------------------OOOOOOOOOOOOOOOOOOOOOOOOOO')
        beer_type = response.css('div.product__data ul ')
        # alcohol_vol = response.css('')

        # print(beer_type)


