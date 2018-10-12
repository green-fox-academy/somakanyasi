import numpy as np
import pandas as pd

#Read file into dataframe
# def header (msg):
# header("Google data file")

filename = 'googleplaystore.csv'
df = pd.read_csv(filename)
print(df)