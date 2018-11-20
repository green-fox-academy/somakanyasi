from selenium import webdriver

driver = webdriver.Chrome()
driver.get("http://kapucinus-sor.hu/termekeink/")
assert "Kapucinus Sörfőzde" in driver.title


beer_names = driver.find_elements_by_tag_name("h2")
alcohols_ballings = driver.find_elements_by_css_selector('ul.info li em')
types_ingreds_descripts = driver.find_elements_by_css_selector("ul.description li")

# types_ingreds_descripts.pop(30)
# types_ingreds_descripts.append('empty')

# for element in types_ingreds_descripts:
#     if str(element.text) is 'A balatonszárszói Lutherfesztivál részére gyártva':
#         print('hahóóóóóóóóóóó')

all_beers = []

for i in range(len(beer_names)):
    item = {}
    item["beer_name"] = beer_names[i].text
    item["alcohol_vol"] = alcohols_ballings[i * 2].text
    item["balling"] = alcohols_ballings[i * 2 + 1].text
    # if types_ingreds_descripts[i].text is 'A balatonszárszói Lutherfesztivál részére gyártva':
    #     types_ingreds_descripts[i].text = types_ingreds_descripts[i + 1].text
    item["beer_type"] = types_ingreds_descripts[i * 3].text
    item["ingredients"] = types_ingreds_descripts[i * 3 + 1].text
    item["description"] = types_ingreds_descripts[i * 3 + 2].text
    all_beers.append(item)
print(all_beers)

driver.close()