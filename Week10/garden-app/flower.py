from plant import Plant

class Flower(Plant):

    def __init__(self, color):
        super().__init__(color)
        self.water_absorb = 0.75

        if self.water_level < 5:
            self.need_water = True
        else:
            self.need_water = False

flower1 = Flower('yellow')
print(flower1.need_water)