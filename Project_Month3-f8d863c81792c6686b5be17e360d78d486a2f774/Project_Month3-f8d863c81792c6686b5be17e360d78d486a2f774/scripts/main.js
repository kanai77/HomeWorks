const baseURL = "https://api.tvmaze.com";

fetch(`${baseURL}/shows?page=1`, {
	method: "GET",
}).then(res => {
	return res.json();
}).then(data => {
	for(let i = 0; i < data.length; i++){
		const img = `<img src="${data[i].image.medium}"/>`;
		document.querySelector('.movies').innerHTML += img;
	}
});


