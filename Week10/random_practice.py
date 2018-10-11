grocery_list = ['salami', 'paprika', 'cheese']
enumerateGrocery = enumerate(grocery_list)

print(type(enumerateGrocery))

#converting to list
print(list(enumerateGrocery))

#changing the default counter
enumerateGrocery = enumerate(grocery_list, 10)
print(list(enumerateGrocery))
print('\n')

#looping over an anumerate object
for item in enumerate(grocery_list):
  print(item)

print('\n')

for count, item in enumerate(grocery_list):
  print(count, item)

print('\n')

#changing default start value
for count, item in enumerate(grocery_list, 100):
  print(count, item)