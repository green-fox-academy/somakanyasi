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

        for href in response.css('a.next::attr(href)'):
            yield response.follow(href, self.parse)


    def parse_article(self, response):
        url = response.url
        print('                 ++++++++++++++++++OOOOOOOOOOOOOOOOOOOOOOOOOOO+++++++++++++++++++')
        print(      'title:', response.css('h1.post-title span::text').extract_first())
        # print('                 ++++++++++++++++++OOOOOOOOOOOOOOOOOOOOOOOOOOO+++++++++++++++++++')
        text_content = response.css('div.post-body p::text').extract()
        print(      'text:', "".join([par for par in text_content]))
        # print('++++++++++++++++++++++++++++++++++++++++++++++++++++++')
         # print(article.css('span.fb-like-count span::text').extract_first())
        # print(article.css('div.author-content p::text').extract_first(),)
        # print(      'comments', response.xpath('//span[@class=" _50f7"]/text()').extract_first())
        print(      'date:', response.css('div.author-content p::text').extract_first())
        # if article.css('div.author-content p::text').extract_first() is not None:
        #     date = article.css('div.author-content p::text').extract_first()
        # else:
        #     date = None
        
        # yield {
        #     "title": article.css('h1.post-title span::text').extract_first(),
        #     "date": date,
        #     "url": url,
        #     "text": article.css('div.post-body p::text').extract(),
        #     "comments": article.css('span. _50f7::text').extract_first(),
        # }
            
           


