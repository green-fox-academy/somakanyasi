import pandas as pd
import numpy as np
import pandas as pd
import quandl
import math
import datetime
from sklearn import preprocessing, cross_validation, neighbors
import matplotlib.pyplot as plt
from matplotlib import style
import random

filename = 'beers.csv'
df = pd.read_csv(filename)
# print(df.head())

# print(len(df['style'].unique()))
# print(len(df))


df2 = df.dropna(subset=['ibu'])
# print(df2.head())
# print(len(df2))


srm_dict = {
    'Pilsner': 4,
    'Witbier': 3,
    'Belgian Ale': 6,
    'Maibock': 7,
    'Lager': 11,
    'Oktoberfest': 8,
    'APA': 10,
    'IPA': 10,
    'ESB': 11,
    'Märzen': 12,
    'Imperial Pale Ale': 8,
    'Dunkel Weizen': 12,
    'Amber': 15,
    'Brown Ale': 18,
    'Bock': 22,
    'Porter': 30,
    'Oatmeal Stout': 32,
    'Imperial Stout': 65,
    'Stout': 45,
    'Blonde Ale': 4,
    'Barleywine': 15,
    'Strong Ale': 15,
    'Pale Ale': 7,
    'Weissbier': 4,
    'Fruit / Vegetable Beer': 8,
    'Red Ale': 12
}

for i, style in enumerate(df2['style']):
    for key in srm_dict:
        if key in str(style):
            df2.loc[df2.index[i], 'style_new'] = key
            df2.loc[df2.index[i], 'srm'] = srm_dict[key]

df2.to_csv('cleanbeer.csv')
