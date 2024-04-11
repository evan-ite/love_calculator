import axios from 'axios';

export default function fetchGif({percentage}) {
	//ev.prevenDefault(); // stop page from reloading
	let search;
	if (percentage >= 80) {
		search = "love";
	} else if (percentage >= 50) {
		search = "cool";
	} else {
		search = "heartbreak";
	}

	const api_key = 'c6aor7INy8jinOkYDHPg6fp5emVEpyEI';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&q=${search}`;
	console.log("URL: ", url);

	// Returning a new Promise to handle the async request properly
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => response.json())
			.then(content => {
				console.log("Data:", content.data);
				console.log("Meta:", content.meta);
				 const gifUrl = content.data[0].images.downsized.url;
				resolve(gifUrl)
			})
			.catch(error => {
				console.error('Error fetching GIF:', error);
				reject(error); // Rejecting the promise on fetch error
			});
	});

}
