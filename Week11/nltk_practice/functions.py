import nltk

from nltk.corpus import stopwords
from nltk.corpus import reuters

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

print(content_fraction(nltk.corpus.reuters.words()))