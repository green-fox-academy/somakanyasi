import nltk

from nltk.corpus import stopwords
from nltk.corpus import reuters
from nltk.corpus import swadesh
from nltk.corpus import wordnet as wn


# GIVES BACK THE PLURAL FORM OF AN ENGLISH WORD
def plural(word):
    if word.endswith('y'):
        return word[:-1] + 'ies'
    elif word[-1] in 'sx' or word[-2:] in ['sh', 'ch']:
        return word + 'es'
    elif word.endswith('an'):
        return word[:-2] + 'en'
    else:
        return word + 's'

# print(plural('woman'))
# print(plural('fairy'))


# EXAMINES A TEXT AND FILTERS OUT THE UNCOMMON OR MIS-SPELT WORDS
def unusual_words(text):
    text_vocab = set(w.lower() for w in text if w.isalpha())
    english_vocab = set(w.lower() for w in nltk.corpus.words.words())
    unusual = text_vocab.difference(english_vocab)
    return sorted(unusual)

# print(unusual_words(nltk.corpus.gutenberg.words('austen-sense.txt')))
# print(unusual_words(nltk.corpus.nps_chat.words()))


# GIVES BACK THE FRACTION OF THE STOPWORDS IN A TEXT
def content_fraction(text):
    stopwords = nltk.corpus.stopwords.words('english')
    content = [w for w in text if w.lower() not in stopwords]
    return len(content) / len(text)

# print(content_fraction(nltk.corpus.reuters.words()))


# WORD PUZZLE
puzzle_letters = nltk.FreqDist('egivrvonl')
obligatory = 'r'
wordlist = nltk.corpus.words.words()
words_generated = [w for w in wordlist if len(w) >= 6
                and obligatory in w
                and nltk.FreqDist(w) <= puzzle_letters]
# print(words_generated)


# NAME CORPUS
names = nltk.corpus.names
male_names = names.words('male.txt')
female_names = names.words('female.txt')
unisex_names = [w for w in male_names if w in female_names]
# print(unisex_names)

cfd = nltk.ConditionalFreqDist(
           (fileid, name[-1])
           for fileid in names.fileids()
           for name in names.words(fileid))
# print(cfd.plot())


# PRONOUNCING DICTIONARY
entries = nltk.corpus.cmudict.entries()
# print(len(entries))
for entry in entries[39943:39951]:
    # print(entry)
    pass

syllable = ['N', 'IH0', 'K', 'S']
rhymes = [word for word, pron in entries if pron[-4:] == syllable]
# print(rhymes)

def stress(pron):
    return [char for phone in pron for char in phone if char.isdigit()]
# print([w for w, pron in entries if stress(pron) == ['0', '1', '0', '2', '0']])
# print([w for w, pron in entries if stress(pron) == ['0', '2', '0', '1', '0']])

p3 = [(pron[0]+'-'+pron[2], word)
        for (word, pron) in entries
        if pron[0] == 'P' and len(pron) == 3]

cfd = nltk.ConditionalFreqDist(p3)
for template in cfd.conditions():
    if len(cfd[template]) > 10:
        words = cfd[template].keys()
        wordlist = ' '.join(words)
        # print(template, wordlist[:70] + "...")

# SWADESH WORDLIST (COMPARATIVE)
fr2en = swadesh.entries(['fr', 'en'])    # French-English
de2en = swadesh.entries(['de', 'en'])    # German-English
es2en = swadesh.entries(['es', 'en'])    # Spanish-English
translate = dict(fr2en)
translate.update(dict(de2en))
translate.update(dict(es2en))
# print(translate['chien'])
# print(translate['jeter'])
# print(translate['Hund'])
# print(translate['perro'])

languages = ['en', 'de', 'nl', 'es', 'fr', 'pt', 'la']
for i in [139, 140, 141, 142]:
    # print(swadesh.entries(languages)[i])
    pass


# WORD NET
# print(wn.synsets('motorcar'))
# print(wn.synset('car.n.01').lemma_names())
# print(wn.synset('car.n.01').definition())
# print(wn.synset('car.n.01').examples())
# print(wn.synset('car.n.01').lemmas())

for synset in wn.synsets('car'):
    print(synset.lemma_names())


