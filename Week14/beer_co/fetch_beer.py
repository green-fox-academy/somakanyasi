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

# Drop the useless rows
df = df.fillna('NaN')
df = df[df["beer_name"] != 'NaN']
df = df[df["beer_name"] != 'We are Mad Scientist!']
df = df[df["beer_name"] != 'Sörpárlat']

char_to_replace = ['I', 'B', 'U', ' ', ':']

for char in char_to_replace:
    df["bitterness"] = df["bitterness"].str.replace(char, '')

df["bitterness"] = df["bitterness"].str.replace('O', '0')
df["bitterness"] = df["bitterness"].str.replace(',', '.')
df["bitterness"] = pd.to_numeric(df["bitterness"], errors='coerce')

# Drop the duplicates
df.drop_duplicates(keep='first', inplace=True)


# DECIDING THE TYPE OF THE BEER:
df["beer_type_new"] = ''
beer_types = ['IPA', 'APA', 'Pale Ale', 'Blonde Ale', 'Amber Ale', 'Brown Ale', 'Stout', 'Porter', 'Lager', 'Wheat', 'Pilsner', 'Saison']
ipa_names = ['ipa', 'indian pale ale']
apa_names = ['apa', 'american pale ale']
wheat_names = ['buza', 'búza', 'weizen', 'wheat', 'weisse', 'witbier']
pils_names = ['pils', 'pilz']

# getting the beer types from their description
for index, descrip in enumerate(df["description"]):
    # if 'ale' in descrip.lower():
    #     df.loc[df.index[index], "beer_type_new"] = 'Ale'
    for btype in beer_types:
        if btype.lower() in descrip.lower():
            df.loc[df.index[index], "beer_type_new"] = btype
    for itype in ipa_names:
        if itype in descrip.lower():
            df.loc[df.index[index], "beer_type_new"] = 'IPA'
    for atype in apa_names:
        if atype in descrip.lower():
            df.loc[df.index[index], "beer_type_new"] = 'APA'
    for wtype in wheat_names:
        if wtype in descrip.lower():
            df.loc[df.index[index], "beer_type_new"] = 'Wheat'
    for ptype in pils_names:
        if ptype in descrip.lower():
            df.loc[df.index[index], "beer_type_new"] = 'Pilsner'

# getting the beer types from their names
for index, name in enumerate(df["beer_name"]):
    if 'ale' in name.lower():
        df.loc[df.index[index], "beer_type_new"] = 'Ale'
    for btype in beer_types:
        if btype.lower() in name.lower():
            df.loc[df.index[index], "beer_type_new"] = btype
    for itype in ipa_names:
        if itype in name.lower():
            df.loc[df.index[index], "beer_type_new"] = 'IPA'
    for atype in apa_names:
        if atype in name.lower():
            df.loc[df.index[index], "beer_type_new"] = 'APA'
    for wtype in wheat_names:
        if wtype in name.lower():
            df.loc[df.index[index], "beer_type_new"] = 'Wheat'
    for ptype in pils_names:
        if ptype in name.lower():
            df.loc[df.index[index], "beer_type_new"] = 'Pilsner'

print(df["beer_type_new"])


# DECIDING IF A BEER IS BITTER OR NOT:
df["bitterness_index"] = 0
# print(df.dtypes)
# calculating from the IBU number:
for index, row in enumerate(df["bitterness"]):
    if row is not 'NaN' and row is not '' and row is not math.nan and row > 35:
        df.loc[df.index[index], "bitterness_index"] = 1
        # print(df.loc[df.index[index], "bitterness_index"])

# calculating from the type of the beer:
for index, beer in enumerate(df["beer_type_new"]):
    if 'ipa' in beer.lower() or 'stout' in beer.lower():
        df.loc[df.index[index], "bitterness_index"] = 1


# calculating from the description


print(df.head(10))

# df.to_csv("dump.csv")

