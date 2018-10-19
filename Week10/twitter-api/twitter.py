from tweepy import API
from tweepy import Cursor
from tweepy import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import twitter_credentials

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
		print(status)
		

if __name__ == "__main__":
	
	hash_tag_list = ['donald trump', 'barack obama']
	fetched_tweets_filename = "tweets.json"

	twitter_streamer = TwitterStreamer()
	twitter_streamer.stream_tweets(fetched_tweets_filename, hash_tag_list)