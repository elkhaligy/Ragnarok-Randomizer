import os
import requests

# URL template for the GIFs
url_template = "https://file5s.ratemyserver.net/mobs/{}.gif"

# Directory to save the GIFs
download_directory = "mobs_gifs"

# Create the download directory if it doesn't exist
os.makedirs(download_directory, exist_ok=True)

# Function to download a GIF given its number
def download_gif(gif_number):
	url = url_template.format(gif_number)
	response = requests.get(url)
	if response.status_code == 200:
		file_path = os.path.join(download_directory, f"{gif_number}.gif")
		with open(file_path, "wb") as f:
			f.write(response.content)
		print(f"Downloaded {file_path}")
	else:
		print(f"Failed to download GIF {gif_number}")

# Download GIFs from 1 to 5000
for gif_number in range(1000, 5001):
	download_gif(gif_number)