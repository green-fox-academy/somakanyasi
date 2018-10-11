from plant import Plant

class Tree(Plant):

    def __init__(self, color):
        super().__init__(color)
        self.water_absorb = 0.4

        if self.water_level < 10:
            self.need_water = True
        else:
            self.need_water = False

tree1 = Tree('orange')
print(tree1.water_level)