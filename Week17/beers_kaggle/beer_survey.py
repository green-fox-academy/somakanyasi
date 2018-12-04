import pandas as pd
import numpy as np
import re
from sklearn import preprocessing, cross_validation, svm, neighbors
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

df = pd.read_csv('beer_survey2.csv')
df.columns = ['Timestamp', 'Language_orig', 'Your gender', 'Do you wear glasses?', 'Movie_orig', 'Bitter_orig', 'Strong_orig', 'Fruity_orig', 'Beer_type_orig', 'Comments']
df['language'] = 0
df.loc[df['Language_orig'] == 'Javascript', ['language']] = 0.25
df.loc[df['Language_orig'] == 'C', ['language']] = 0.5
df.loc[df['Language_orig'] == 'Other', ['language']] = 1

df = df.drop(columns=['Timestamp', 'Comments'])
df['gender'] = 0
df.loc[df['Your gender'] == 'Female', ['gender']] = 1
df['glasses'] = 0
df.loc[df['Do you wear glasses?'] == 'Yes', ['glasses']] = 1
df['Bitter'] = df['Bitter_orig'] / 10
df['Strong'] = df['Strong_orig'] / 10
df['Fruity'] = df['Fruity_orig'] / 10

# print(df.head())
# print(df.describe())
# print(df.info())

# df2 = df[['Bitter', 'Strong', 'Fruity', 'gender', 'glasses']]
# # print(df2.head())
# # print(df2.describe())

# X = np.array((df2.drop(['glasses'], 1)))
# X = preprocessing.scale(X)
# y = np.array(df2['glasses'])

df3 = df[['Bitter', 'Strong', 'Fruity', 'gender', 'glasses', 'language', 'Movie_orig']]
# print(df2.head())
# print(df2.describe())

X = np.array((df3.drop(['Movie_orig'], 1)))
X = preprocessing.scale(X)
y = np.array(df3['Movie_orig'])

print(len(X), len(y))   

X_train, X_test, y_train, y_test = cross_validation.train_test_split(X, y, test_size=0.2)

# create a Linear Regressor   
# clf = LinearRegression()

# create kNN  
clf = neighbors.KNeighborsClassifier(20)

clf.fit(X_train, y_train)
accuracy = clf.score(X_test, y_test)
print(accuracy)


example_measures = np.array([[0.8, 0.8, 0.3, 0, 1, 0.25], [0.5, 0.3, 0.7, 0, 0, 0.75], [0.2, 0.3, 0.8, 1, 1, 0], [0.5, 0.5, 0.5, 1, 0, 0]])

prediction = clf.predict(example_measures)
print(prediction)

# # pass the order of your polynomial here  
# poly = PolynomialFeatures(2)

# # convert to be used further to linear regression
# X_transform = poly.fit_transform(X_train)

# # fit this to Linear Regressor
# clf.fit(X_transform,y_train) 

# # get the predictions
# y_preds = clf.predict(X_test)