import numpy as np
import pandas as pd

#Read file into dataframe
def header (msg):
    print(msg)
    print('-' * 50)

header("Google data file")

filename = 'googleplaystore.csv'
filename2 = 'googleplaystore_user_reviews.csv'
df = pd.read_csv(filename)
df2 = pd.read_csv(filename2)
#print(df)

#all the columns of df
header('All the columns of the data-frame')
#print(df.columns)

#sort the records by the rating
header('Data-frame sorted by the Ratings')
print(df.sort_values('Rating', ascending=False))


