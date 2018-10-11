class CastleKilmereMember:

  #class attribute
  location = "Hungary"

  def __init__(self, name, birthyear, sex):
    self._name = name
    self._birthyear = birthyear
    self._sex = sex
  
  def says(self, words):
    return f"{self._name} says {words}"

  #static method:
  @staticmethod
  def school_headmaster():
    return CastleKilmereMember('Redmond Dalodore', 1939, 'male')


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

  @classmethod
  def cleon(cls):
    return cls('Cleon Bery', 2008, 'male', 'House of Courage', 2018, ('Cotton', 'owl'))

  @classmethod
  def flynn(cls):
    return cls('Flynn Gibbs', 2008, 'male', 'House of Courage', 2018, ('Twiggles', 'owl'))

  @classmethod
  def cassidy(cls):
    return cls('Cassidy Ambergem', 2007, 'female', 'House of Courage', 2018, ('Ramses', 'cat'))

  @staticmethod
  def passed(grade):
    grades = {
      'O': True,
      'Ordinary': True,
      'P': True,
      'Passed': True,
      'A': True,
      'Acceptable': True,
      'P': False,
      'Poor': False,
      'H': False,
      'Horrible': False,
    }
    return grades.get(grade, False)
  
  def toString(self):
    return f"My name is {self._name} and I'm a student of the {self.house} class {self.start_year}. Also I have an {self.pet_type} and it's name is {self.pet_name}."



class Professor(CastleKilmereMember):

  def __init__(self, name, birthyear, sex, subject, house):
    super().__init__(name, birthyear, sex)
    self.subject = subject
    self.house = house

  @classmethod
  def mirren(cls):
    return cls('Miranda Mirren', 1965, 'female', 'Transfiguration', 'House of Courage')

  @classmethod
  def blade(cls):
    return cls('Blade Bardock', 1988, 'male', 'Potions', 'House of Ambition')

  
class Ghost(CastleKilmereMember):

  def __init__(self, name, birthyear, sex, year_of_death, house=None):
    super().__init__(name, birthyear, sex)
    self.year_of_death = year_of_death


    if house is not None:
      self.house = house


if __name__ == "__main__":

  bromley = CastleKilmereMember(name='Bromley Huckabee', birthyear=1959, sex='male')
  cleon = Pupil(name='Cleon Bery', birthyear=2008, sex='male', house='House of Courage', start_year=2018)
  headmaster = cleon.school_headmaster()

  mirren = Professor.mirren()
  blade = Professor.blade()
  cleon = Pupil.cleon()
  flynn = Pupil.flynn()
  cassidy = Pupil.cassidy()
