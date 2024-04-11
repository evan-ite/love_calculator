import axios from 'axios';

export default function fetchGif(matchData) {
	const { percentage } = matchData;
	let search;
	if (percentage >= 80) {
		console.log("TEST hoog percentage", percentage);
		search = "love";
	} else if (percentage >= 50) {
		console.log("TEST midden percentage", percentage);
		search = "cool";
	} else {
		console.log("TEST laag percentage", percentage);
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
