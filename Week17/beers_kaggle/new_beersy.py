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

filename = 'cleanbeer.csv'
df = pd.read_csv(filename)
# print(df.head())

# print(len(df['style'].unique()))

df = df.dropna(subset=['style_new', 'srm'])

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

# print(df.groupby('style_new').count().sort_values(['name'], ascending=False))


df_simplified = df[['abv', 'ibu', 'srm', 'style_new']]
# print(df_simplified.groupby('style').count().sort_values('ibu', ascending=False))

# To find the null values in the dataframe.
# nullcol = df_simplified.columns[df_simplified.isnull().any()]
# nulldf = df_simplified[df_simplified.isnull().any(axis=1)][nullcol]


# print(nulldf.groupby('style').count().sort_values('style'))

# print(df_simplified.head(30))

# X aka features
X = np.array((df_simplified.drop(['style_new'], 1)))
# y for label
y = np.array(df_simplified['style_new'])


X_train, X_test, y_train, y_test = cross_validation.train_test_split(
    X, y, test_size=0.2)


clf = neighbors.KNeighborsClassifier(20)
clf.fit(X_train, y_train)

accuracy = clf.score(X_test, y_test)
print(accuracy)


example_measures = np.array(
    [[0.072, 60.0, 5.0], [0.052, 30.0, 5.0], [0.042, 45.0, 65.0]])

prediction = clf.predict(example_measures)
print(prediction)