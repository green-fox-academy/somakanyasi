class CastleKilmereMember:

  #class attribute
  location = "Hungary"

  def __init__(self, name, birthyear, sex):
    self._name = name
    self._birthyear = birthyear
    self._sex = sex
  
  def says(self, words):
    return f"{self._name} says {words}"


bromley = CastleKilmereMember('Bromley Huckabee', '1959', 'male')
print(bromley.says("Jello!"))

class Pupil(CastleKilmereMember):

  def __init__(self, name, birthyear, sex, house, start_year, pet = None):
    super().__init__(name, birthyear, sex)
    self.house = house
    self.start_year = start_year

    if pet is not None:
      self.pet_name, self.pet_type = pet

    self._elms = {
      'Broomstick FLying': False,
      'Art': False,
      'Magical Theory': False,
      'Foreign Magical Systems': False,
      'Charms': False,
      'Defence Against Dark Magic': False,
      'Divination': False,
      'Herbology': False,
      'History of Magic': False,
      'Potions': False,
      'Transfiguration': False}
  
  def toString(self):
    return f"My name is {self._name} and I'm a student of the {self.house} class {self.start_year}. Also I have an {self.pet_type} and it's name is {self.pet_name}."


cleon  = Pupil(name='Cleon Berry',
               birthyear=2008,
               sex='Male',
               house='House of Courage',
               start_year=2018,
               pet=('Cotton', 'owl'))

print(cleon.toString())
print(bromley.location)

class Professor(CastleKilmereMember):

  def __inti__(self, name, birthyear, sex, subject, house = None):
    super().__init__(name, birthyear, sex)
    self.subject = subject
    self.house = house

  
class Ghost(CastleKilmereMember):

  def __init__(self, name, birthyear, sex, year_of_death, house = None):
    super().__init__(name, birthyear, sex)
    self.year_of_death = year_of_death

  if house is not None:
    self.house = house