from tweepy import API
from tweepy import Cursor
from tweepy import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import twitter_credentials

# # # # TWITTER CLIENT # # # #
class TwitterClient():

	def __init__(self, twitter_user=None):
		self.auth = TwitterAuthenticator().authenticate_twitter_app()
		self.twitter_client = API(self.auth)
		self.twitter_user = twitter_user

	def get_user_timeline_tweets(self, number_of_tweets):
		tweets = []
		#Cursor is a class which allows us to get the user timeline tweets from the chosen user's timeline. If nothing is given there then it's gonna take the tweets from your timeline. The items part decides how many tweets we want.
		for tweet in Cursor(self.twitter_client.user_timeline, id=self.twitter_user).items(number_of_tweets):
			tweets.append(tweet)
			return tweets

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
		

if __name__ == "__main__":
	
	hash_tag_list = ['donald trump', 'barack obama']
	fetched_tweets_filename = "tweets.json"

	twitter_client = TwitterClient('pycon')
	print(twitter_client.get_user_timeline_tweets(1))

	# twitter_streamer = TwitterStreamer()
	# twitter_streamer.stream_tweets(fetched_tweets_filename, hash_tag_list)