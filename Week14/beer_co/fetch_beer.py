#!/usr/bin/env python
# -*- coding: utf-8 -*-
import matplotlib.pyplot as plt
import re
import math
from pymongo import MongoClient

import pandas as pd

client = MongoClient(
    'ec2-35-158-191-40.eu-central-1.compute.amazonaws.com', 27017)


def dump_into_df(db_name):
    db = client[db_name]
    collection = db.scrapy_items
    return pd.DataFrame(list(collection.find({})))


df = dump_into_df("beer")

char_to_replace = ['I', 'B', 'U', ' ', ':']

for char in char_to_replace:
    df["bitterness"] = df["bitterness"].str.replace(char, '')

df["bitterness"] = df["bitterness"].str.replace('O', '0')
df["bitterness"] = df["bitterness"].str.replace(',', '.')

# Drop the duplicates
df.drop_duplicates(keep='first', inplace=True)

# Drop the useless rows
df = df.fillna('NaN')
df = df[df["beer_name"] != 'NaN']
df = df[df["beer_name"] != 'We are Mad Scientist!']
df = df[df["beer_name"] != 'Sörpárlat']

# Filtering the beer types:


# Deciding if a beer is bitter or not
# calculating from the IBU number:
for row in df["bitterness"]:
    if row is not 'NaN' and row is not '' and row is not math.nan:
        if float(row) > 35:
            df["bitter?"] = 1
        elif float(row) < 35:
            df["bitter?"] = 0

print(df["bitter?"])

# df.to_csv("dump.csv")

