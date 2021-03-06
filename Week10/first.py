import random
import sys
import os
from sys import stdin

print("Hello World")

name="Derek"
print(name)

#Numbers

print("5 + 2 =", 5+2)
print("5 - 2 =", 5-2)
print("5 * 2 =", 5*2)
print("5 / 2 =", 5/2)
print("5 % 2 =", 5%2)
print("5 ** 2 =", 5**2)
print("5 // 2 =", 5//2)

print("1 + 2 - 3 * 2", 1 + 2 - 3 * 2)
print("(1 + 2 - 3) * 2", (1 + 2 - 3) * 2)

#Strings

quote = "\"Always remember you are unique"

multi_line_quote = ''' just
like everyone else'''

new_string = quote + multi_line_quote

print("%s %s %s" % ('I like the quote', quote, multi_line_quote))

print('\n' * 5)

print("I don't like ", end="")
print("newlines")

#Lists

grocery_list = ["Juice", "Tomatoes", "Potatoes", "Bananas"]

print("First item is: ", grocery_list[0])

grocery_list[0] = "Green juice"
print("Firwt item is: ", grocery_list[0])

print(grocery_list[1:3])

other_events = ["Wash car", "Pick up kids", "Cash Check"]

to_do_list = [other_events, grocery_list]
print(to_do_list)

print(to_do_list[1][1])

grocery_list.append("Onions")
print(to_do_list)

grocery_list.insert(1, "Pickle")

grocery_list.remove("Green juice")
grocery_list.sort()
grocery_list.reverse()
print(grocery_list)

del grocery_list[4]
print(to_do_list)

to_do_list2 = other_events + grocery_list

print(len(to_do_list2))
print(max(to_do_list2))
print(min(to_do_list2))


#Tuples
'''
pi_tuple = (3, 1, 4, 1, 5, 9)

new_tuple = list(pi_tuple)   #converting a tuple into a list
new_list = tuple(new_tuple)  #converting a list into a tuple

len(tuple) #length of the tuple
min(tuple) #minimum of the tuple
max(tuple) #maximum of the tuple
'''


#Dictionaries/Maps

super_villians = {'Fiddler' : 'Isaac Bowin',
'Captain Cold' : 'Leonard Snart',
'Weather Wizard' : 'Mark Mardon',
'Mirror Master' : 'Sam Scudder',
'Pied Piper' : 'Thomas Peterson'}

print(super_villians['Captain Cold'])

del super_villians['Fiddler']

super_villians['Pied Piper'] = 'Hartley Rathway'

print(len(super_villians))

print(super_villians.get('Pied Piper'))

print(super_villians.keys())

print(super_villians.values())


#Conditionals

age = 30

if age > 16 :
  print('You are old enough to drive')
else : 
  print('You are not old enough to drive')


if age>= 21 :
  print('You are old enough to drive a tractor trailer')
elif age >= 16 : 
  print('You are old enough to drive')
else :
  print('You are not old enough to drive')


if ((age >= 1) and (age <= 18)):
  print("You get a birthday")
elif ((age == 21) or (age >= 65)):
  print("You get a birthday")
elif not(age == 30):
  print("You don't get a birthday")
else:
  print("You get a birthday party yeah")


#Looping

for x in range(0, 10):
  print(x, ' ', end="")

print('\n')

for y in grocery_list:
  print(y)

print('\n')

for z in [2,4,6,8,10]:
  print(z * 3)

print('\n')

num_list = [[1, 2, 3], [10, 20, 30], [100, 200, 300]]

for i in range(0, 3):
  for j in range(0, 3):
    print(num_list[i][j])

print('\n')

random_num = random.randrange(0, 100)

while(random_num != 15):
  print(random_num)
  random_num = random.randrange(0, 100)

print('\n')

i = 0;

while (i <= 20):
  if(i % 2 == 0):
    print(i)
  elif(i == 9):
    break
  else:
    i += 1 
    continue

  i += 1

print('\n')


#Functions

def addNumber(fNum, lNum):
  sumNum = fNum + lNum
  return sumNum

print(addNumber(1, 4))

print('\n')

print("What is your name")
name = sys.stdin.readline()
print("Hello ", name)


#String

long_string = "I'll catch you if you fall - The Floor"

print(long_string[0:4])
print(long_string[-5:])
print(long_string[:-5])
print(long_string[:4] + " be there")

print("%c is my %s letter and my number %d number is %.5f" % ('X', 'favorite', 1, .14))

print(long_string.capitalize())
print(long_string.find("Floor"))
print(long_string.isalpha())      #checks if all the chars are letters
print(long_string.isalnum())      #checks if all the chars are numbers
print(len(long_string))
print(long_string.replace("Floor", "Ground"))
print(long_string.strip())
quote_list = long_string.split(" ")
print(quote_list)


#File input/output

test_file = open("test.txt", "wb")  #"wb" mode means writing into a file
print(test_file.mode)  #prints "wb"
print(test_file.name)  #prints "test.txt"

test_file.write(bytes("Write me to the file \n", "UTF -8"))
test_file.close()

test_file = open("test.txt", "r+")  #"r+" mode means reading and writing
text_in_file = test_file.read()
print(text_in_file)

# os.remove("test.txt")    -   this is how you remove the file


#Objects

class Animal:

  def __init__(self, name, height, weight, sound):
    self._name = name
    self._height = height
    self._weight = weight
    self._sound = sound

  def set_name(self, name):
    self._name = name

  def get_name(self):
    return self._name

  def set_height(self, height):
    self._height = height

  def get_height(self):
    return self._height

  def set_weight(self, weight):
    self._weight = weight

  def get_weight(self):
    return self._weight

  def set_sound(self, sound):
    self._sound = sound

  def get_sound(self):
    return self._sound

  def get_type(self):
    print("Animal")

  def toString(self):
    return "{} is {} cm tall and {} kilograms and say {}".format(self._name, self._height, self._weight, self._sound)


cat = Animal('Whiskers', 33, 10, 'Meow')

print(cat.toString())


#Inheritance

class Dog(Animal):

  def __init__(self, name, height, weight, sound, owner):
    super().__init__(name, height, weight, sound)
    self._owner = owner

  def set_owner(self, owner):
    self._owner = owner

  def get_owner(self):
    return self._owner

  def get_type(self):
    print("Dog")
    
  def toString(self):
    return "{} is {} cm tall and {} kilograms and say {}. His owner is {}".format(self._name, self._height, self._weight, self._sound, self._owner)

  def multiple_sounds(self, how_many = None):
    if how_many is None:
      print(self.get_sound())
    else:
      print(self.get_sound() * how_many)

dog = Dog('Sam8u', 3, 4, "wuff", "Me")

print(dog.toString())


#Polymorphism

class AnimalTesting:
  def get_type(self, animal):
    animal.get_type()

test_animals = AnimalTesting()

test_animals.get_type(cat)
test_animals.get_type(dog)

dog.multiple_sounds(4)
dog.multiple_sounds()

