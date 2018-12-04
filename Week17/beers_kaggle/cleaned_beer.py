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
from sklearn.neighbors import NearestNeighbors


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

X_norm = df_simplified[['abv']].values.astype(float)
Y_norm = df_simplified[['ibu']].values.astype(float)
Z_norm = df_simplified[['srm']].values.astype(float)

min_max_scaler = preprocessing.MinMaxScaler()

df_simplified['abv_norm'] = min_max_scaler.fit_transform(X_norm)
df_simplified['ibu_norm'] = min_max_scaler.fit_transform(Y_norm)
df_simplified['srm_norm'] = min_max_scaler.fit_transform(Z_norm)

# print(df_simplified['abv_norm'])

# X aka features
X = np.array((df_simplified.drop(['style_new', 'abv', 'ibu', 'srm'], 1)))
# y for label
y = np.array(df_simplified['style_new'])

X_train, X_test, y_train, y_test = cross_validation.train_test_split(
    X, y, test_size=0.2)


clf = neighbors.KNeighborsClassifier(20)
clf.fit(X_train, y_train)

accuracy = clf.score(X_test, y_test)
print(accuracy)


example_measures = np.array(
    [[0.072, 0.1, 0.1], [0.052, 30.0, 5.0], [0.042, 45.0, 65.0]])

prediction = clf.predict(example_measures)
print(prediction)

nbrs = NearestNeighbors(n_neighbors=3, algorithm='ball_tree').fit(X)


def whoistheneighbour(i):
    coordinates = [[df_simplified.iloc[i]['abv'],
                    df_simplified.iloc[i]['ibu'], df_simplified.iloc[i]['srm']]]
    distances, indices = nbrs.kneighbors(coordinates)
    # return indices
    print('********origi********', df_simplified.iloc[i])
    for item in indices[0]:
        print('********neighbour************')
        print(df_simplified.iloc[item])
        


whoistheneighbour(162)
whoistheneighbour(723)


# print(indices[0:5], distances[0:5])
# print(df_simplified[0:1])
# print(df_simplified.iloc[0])
# print(df_simplified.iloc[151])
# print(df_simplified.iloc[148])

