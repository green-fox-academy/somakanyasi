import scrapy

class ClockChangeSpiderTest(scrapy.Spider):
    name = 'news'

    start_urls = [
        'https://24.hu/?s=%C3%B3ra%C3%A1t%C3%A1ll%C3%ADt%C3%A1s',
        # 'https://24.hu/page/2/?s=%C3%B3ra%C3%A1t%C3%A1ll%C3%ADt%C3%A1s',
    ]

    def parse(self, response):
        for item in response.css('h3.post-title-small'):
            next_page = item.css('a::attr(href)').extract_first()
            yield response.follow(next_page, self.parse_article)

        for href in response.css('a.next::attr(href)'):
            print('linkecskék:', href)
            yield response.follow(href, self.parse)
        # next_page = response.css
        # //*[@id="content"]/div/div/div[2]/div[25]/ul/li[8]/a

    def parse_article(self, response):
        for article in response.xpath('//div[@class="is_content is_post_false"]'):
            # print('++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            print('title:', article.css('h1.post-title span::text').extract_first())
            print('++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            # print(article.css('div.post-body p::text').extract())
            # print('++++++++++++++++++++++++++++++++++++++++++++++++++++++')
            # print(article.css('span.fb-like-count span::text').extract_first())
            yield {
                "title": article.css('h1.post-title span::text').extract_first(),
                "text": article.css('div.post-body p::text').extract(),
                "url": article.css('')
            }
            
           


