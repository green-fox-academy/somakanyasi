import scrapy

class MadScientistCrawler(scrapy.Spider):
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
        beer_name = response.css('h1::text').extract_first().strip()
        lis = response.css('div.product__data ul li::text').extract()
        description = ''.join(response.css('div.product__content p::text').extract())
        if lis is not None and len(lis) > 0:
            alcohol_vol = lis[1].strip()
            beer_type = lis[4].strip()
            print(alcohol_vol)
        else:
            alcohol_vol = ""
            beer_type = ""
        yield {
            "beer_name": beer_name,
            "brewery": brewery,
            "alcohol_vol": alcohol_vol,
            "beer_type": beer_type,
            "description": description,
        }
        # beer_type
        # for item in lis:
            
        #     print(item.strip())
        # for item in response.css('div.product__data ul li::text').extract_first():
            # print(item)
            # print(item[1])
            # print('OOOOOOOOOOOOOOOOOOOOOOO--------------------------------------------OOOOOOOOOOOOOOOOOOOOOOOOOO')
        # beer_type = response.css('div.product__data ul ')
        # alcohol_vol = response.css('')

        # print(beer_type)

