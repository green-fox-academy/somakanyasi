import numpy as np
import pandas as pd
import operator

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
# header('number of duplicated lines')
# print(df.duplicated().sum())

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

#to change the value of a specific cell
# header('adding a category to row 10472')
# print(df.set_value(10472, 'Category', 'PHOTOGRAPHY'))

#to check if some of the columns have a null value
# header('check if Rating col has null value')
# print(df.isnull().groupby('Rating').count())
# header('check if Type col has null value')
# print(df.isnull().groupby('Type').count())
# header('check if Genres col has null value')
# print(df.isnull().groupby('Genres').count())
# header('check if Current Version col has null value')
# print(df.isnull().groupby('Current Ver').count())
# header('check if Andriod Version col has null value')
# print(df.isnull().groupby('Andriod Ver').count())

#to group values of a column and count the occurances
genre_list = df.Genres
genre_dict ={}

for i in genre_list:
    keys = i.split(';')
    for key in keys:
        if key in genre_dict:
            genre_dict[key]+=1
        else:
            genre_dict[key]=1

# print(sorted(genre_dict.items(), key=lambda x: -x[1]))
# print(sorted(genre_dict.items(), key=operator.itemgetter(1), reverse = True

#calculate the average file size

size_list = df['Size'].replace('Varies with device', 'NaN')
sum_of_all = 0

for x in size_list:
    if x.lower()[-1] == 'm':
        a = float(x[:-1]) * 1024 * 1024
        sum_of_all += a
    elif x.lower()[-1] == 'k':
        b = float(x[:-1]) * 1024
        sum_of_all += b

average_in_MB = (sum_of_all / (1024 ** 2)) / len(size_list)

print(average_in_MB)

#lowest number of reviews:
# header(App with the lowest number of reviews)
# print(df.Reviews.min())
