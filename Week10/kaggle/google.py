import numpy as np
import pandas as pd

#Read file into dataframe
# def header (msg):
# header("Google data file")

filename = 'googleplaystore.csv'
filename2 = 'googleplaystore_user_reviews.csv'
df = pd.read_csv(filename)
df2 = pd.read_csv(filename2)
#print(df)

#all the columns of df
#print(df.columns)

#sort the records by the rating
print(df.sort_values('Rating', ascending=False))

#statistical summary of df
#print(df.describe())

