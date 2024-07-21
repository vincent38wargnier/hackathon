import requests

api_key="AIzaSyAyDacalcyKd7P7XqrAMDQkefOTRTmeKHM"
topic = "diabetes"
youtube_url = "https://www.googleapis.com/youtube/v3/search?key={api_key}&part=snippet&type=video&q={topic}"

response = requests.get(youtube_url.format(api_key=api_key, topic=topic))
data = response.json()
videoId = data["items"][0]["id"]["videoId"]

generateURL = "https://www.youtube.com/watch?v=" + str(videoId)
print(videoId, generateURL)