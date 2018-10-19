from tweepy import StreamListener
from tweepy import OAuthHandler
from tweepy import Stream

import twitter_credentials

class StdOutListener(StreamListener):

	def on_data(self, data):
		print(data)
		return True

	def on_error(self, status):
		print(status)
		

if __name__ == "__main__":

	listener = StdOutListener()
	auth = OAuthHandler(twitter_credentials.Twitter_API_key, twitter_credentials.Twitter_secret_API_key)
	auth.set_access_token(twitter_credentials.Access_Token, twitter_credentials.Access_Token_secret)

	stream = Stream(auth, listener)

	stream.filter(track=['donald trump'])