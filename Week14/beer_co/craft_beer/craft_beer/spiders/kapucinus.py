# import scrapy
# from selenium import webdriver

# driver = webdriver.Chrome()
# driver.get('http://kapucinus-sor.hu/')
# assert "Kapucinus Sörfőzde" in driver.title

# btn_to_click = driver.find_element_by_tag_name('input')
    
# if (btn_to_click is not None):
#     print('megvan a gomb tes')
#     btn_to_click.click()
    
# driver.close()

# class KapucinusCrawler(scrapy.Spider):
#     name = "kapucinus"

#     start_urls = [
#         'http://kapucinus-sor.hu/termekeink/',
#     ]

#     def parse(self, response):
#         print(response.css("h2"))

