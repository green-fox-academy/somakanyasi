import numpy as np
import pandas as pd

pd.set_option('display.max_row', 50)
pd.set_option('display.max_columns', 15)

#Read file into dataframe
def header (msg):
    print(msg)
    print('-' * 50)

filename = 'googleplaystore.csv'
filename2 = 'googleplaystore_user_reviews.csv'
df = pd.read_csv(filename)
df2 = pd.read_csv(filename2)
# header("Google data file")
# print(df)

#all the columns of df
# header('All the columns of the data-frame')
# print(df.columns)

#sort the records by the rating
# header('Data-frame sorted by the Ratings')
# print(df.sort_values('Rating', ascending=False))

#sort the unique values of the columns
# header("All the unique values of the 'App' column")
# print(df.App.unique())

#get how many duplicated lines the data-frame has
header('number of duplicated lines')
print(df.duplicated().sum())

#drop duplicates of the data-frame
# header('dropping the duplicated rows of the data-frame')
# df.drop_duplicates(keep='first', inplace=True)

# collect the data by groups
# header('group the data-frae by Genres')
# print(df.groupby().count())
# print(df.groupby('Genres').App)

#to shift the values of every column in one specific row 
# header('shifting the data of row 10472')
# print(df.iloc[10472, 2:] = df.iloc[10472, 1:].shift(1))

#to change the valu of a specific cell
# header('adding a category to row 10472')
# print(df.set_value(10472, 'Category', 'PHOTOGRAPHY'))

