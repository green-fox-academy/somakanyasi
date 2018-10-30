import nltk

# gives back the plural of an english word
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

# examines a text and filters out the uncommon or mis-spelt words
def unusual_words(text):
    text_vocab = set(w.lower() for w in text if w.isalpha())
    english_vocab = set(w.lower() for w in nltk.corpus.words.words())
    unusual = text_vocab.difference(english_vocab)
    return sorted(unusual)

print(unusual_words(nltk.corpus.gutenberg.words('austen-sense.txt')))
print(unusual_words(nltk.corpus.nps_chat.words()))
