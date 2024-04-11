
export default function fetchGif(matchData) {
	let search;
	const { percentage } = matchData;
	if (percentage >= 80) {
		search = "love";
	} else if (percentage >= 50) {
		search = "dating";
	} else {
		search = "heartbreak";
	}

	const api_key = 'c6aor7INy8jinOkYDHPg6fp5emVEpyEI';
	const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${search}`;
	console.log("URL: ", url);

	// Returning a new Promise to handle the async request properly
	return new Promise((resolve, reject) => {
		fetch(url)
			.then(response => response.json())
			.then(content => {
				console.log("Data:", content.data);
				console.log("Meta:", content.meta);
				const gifUrl = content.data.images.downsized.url;
				resolve(gifUrl)
			})
			.catch(error => {
				console.error('Error fetching GIF:', error);
				reject(error); // Rejecting the promise on fetch error
			});
	});
}
