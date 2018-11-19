# import scrapy
# from selenium import webdriver

# driver = webdriver.Chrome()
# driver.get('http://reketye.com/beers/')
# assert "beers – Reketye Brewing Co." in driver.title

# beer_names = driver.find_elements_by_xpath("//*[@class='entry-title']/a")
# alcohol_vols = driver.find_elements_by_xpath("//*[@class='entry-excerpt']/p/b")

# # print(len(beer_names))
# # print(len(alcohol_vols))

# reketye_beers = []

# for beer in beer_names:
#     print(beer)

# for i in range(0, 17):
#     item = {}
#     item["beer_name"] = beer_names[i].text
#     item["alcohol_vol"] = alcohol_vols[i].text
#     reketye_beers.append(item)
# print(reketye_beers)
    
# driver.close()

# class ReketyeCrawler(scrapy.Spider):
#     name = "reketye"

#     start_urls = [
#         'http://reketye.com/beers/',
#     ]

#     def parse(self, response):
#         url = response.url
#         print('itt vagyok itt vagyok ------------------------------------------ itt vagyok itt vagyok')
#         print(url)

