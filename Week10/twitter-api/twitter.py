from tweepy import API
from tweepy import Cursor
from tweepy import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import numpy as np
import pandas as pd
import twitter_credentials
import matplotlib.pyplot as plt


# # # # TWITTER CLIENT # # # #
class TwitterClient():

	def __init__(self, twitter_user=None):
		self.auth = TwitterAuthenticator().authenticate_twitter_app()
		self.twitter_client = API(self.auth)
		self.twitter_user = twitter_user

	def get_twitter_client_api(self):
		return self.twitter_client

	def get_user_timeline_tweets(self, number_of_tweets):
		tweets = []
		#Cursor is a class which allows us to get the user timeline tweets from the chosen user's timeline. If nothing is given there then it's gonna take the tweets from your timeline. The items part decides how many tweets we want.
		for tweet in Cursor(self.twitter_client.user_timeline, id=self.twitter_user).items(number_of_tweets):
			tweets.append(tweet)
		return tweets

	def get_friend_list(self, number_of_friends):
		list_of_friends = []
		for friend in Cursor(self.twitter_client.friends, id=self.twitter_user).items(number_of_friends):
			list_of_friends.append(friend)
		return list_of_friends

	def get_home_timeline_tweets(self, number_of_tweets):
		home_timeline_tweets = []
		for tweet in Cursor(self.twitter_client.home_timeline, id=self.twitter_user).items(number_of_tweets):
			home_timeline_tweets.append(tweet)
		return home_timeline_tweets

# # # # TWITTER AUTHENTICATER # # # #
class TwitterAuthenticator():

	def authenticate_twitter_app(self):
		auth = OAuthHandler(twitter_credentials.Twitter_API_key, twitter_credentials.Twitter_secret_API_key)
		auth.set_access_token(twitter_credentials.Access_Token, twitter_credentials.Access_Token_secret)
		return auth

# # # # TWITTER STREAMER # # # #
class TwitterStreamer():
	'''
	Class for streaming and processing live tweets
	'''
	def __init__(self):
		self.twitter_authenticator = TwitterAuthenticator()

	def stream_tweets(self, fetched_tweets_filename, hash_tag_list):
		#this handles Twitter authentication and the connection to the Twitter Streaming API.
		listener = TwitterListener(fetched_tweets_filename)
		auth = self.twitter_authenticator.authenticate_twitter_app()
		stream = Stream(auth, listener)

		#this line filter Twitter Streams to capture data by the keywords:
		stream.filter(track=hash_tag_list)

# # # # TWITTER STREAM LISTENER # # # #
class TwitterListener(StreamListener):
	'''
	This is a basic listener class that just prints received tweets to stdout
	'''
	def __init__(self, fetched_tweets_filename):
		self.fetched_tweets_filename = fetched_tweets_filename

	def on_data(self, data):
		try:
			print(data)
			with open(self.fetched_tweets_filename, 'a') as tf:
				tf.write(data)
			return True
		except BaseException as e:
			print("Error on data: %s" % str(e))
		return True

	def on_error(self, status):
		if status == 420:
			#cutting the run of the program by returning False on data method in case rate limit is exceeded
			return False
		print(status)

class TweetAnalyzer():
	'''
	Functionality for analyzing and categorizying content from tweets.
	'''
	def tweets_to_data_frame(self, tweets):
		df = pd.DataFrame(data=[tweet.text for tweet in tweets], columns=['tweets'])

		#creates the ['.....'] column to our dataframe and then fills it out with the proper values
		df['id'] = np.array([tweet.id for tweet in tweets])
		df['length'] = np.array([len(tweet.text) for tweet in tweets])
		df['date'] = np.array([tweet.created_at for tweet in tweets])
		df['source'] = np.array([tweet.source for tweet in tweets])
		df['likes'] = np.array([tweet.favorite_count for tweet in tweets])
		df['retweets'] = np.array([tweet.retweet_count for tweet in tweets])

		return df


if __name__ == "__main__":
	
	twitter_client = TwitterClient()
	tweet_analyzer = TweetAnalyzer()

	api = twitter_client.get_twitter_client_api()

	tweets = api.user_timeline(screen_name="realDonaldTrump", count=200)

	#to check what kind of information we can get from the first tweet
	# print(dir(tweets[0]))

	#gives back how many times this particular tweet has been retweeted
	# print(tweets[0].retweet_count)    

	df = tweet_analyzer.tweets_to_data_frame(tweets)
	# print(df.head(10))

	#Get average length over all tweets.
	print(np.mean(df['length']))

	#Get the number of likes for the most liked tweet.
	print(np.max(df['likes']))

	#Get the number of retweets for the most retweeted tweet.
	print(np.max(df['retweets']))

	#Time Series
	time_likes = pd.Series(data = df['likes'].values, index = df['date'])
	time_likes.plot(figsize = [16, 4], color = 'r')
	plt.show()

