from tweepy import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import twitter_credentials

class TwitterStreamer():
	'''
	Class for streaming and processing live tweets
	'''

	def stream_tweets(self, fetched_tweets_filename, hash_tag_list):
		#this handles Twitter authentication and the connection to the Twitter Streaming API.
		listener = StdOutListener()
		auth = OAuthHandler(twitter_credentials.Twitter_API_key, twitter_credentials.Twitter_secret_API_key)
		auth.set_access_token(twitter_credentials.Access_Token, twitter_credentials.Access_Token_secret)

		stream = Stream(auth, listener)

		stream.filter(track=hash_tag_list)


class StdOutListener(StreamListener):
	'''
	This is a basic listener class that just prints received tweets to stdout
	'''

	def on_data(self, data):
		print(data)
		return True

	def on_error(self, status):
		print(status)
		

if __name__ == "__main__":
	pass