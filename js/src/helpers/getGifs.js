
export const getGifs = async (category) =>{

	const url = `https://api.giphy.com/v1/gifs/search?api_key=TxsVYqi4N4BjlE0dCGGim05SUzmLrdKG&q=${category}&limit=8`;

	const consulta = await fetch(url);

	const { data } = await consulta.json()

	const gifs = data.map(img =>({
		id : img.id,
		title : img.title,
		url : img.images.downsized_medium.url
	}))

	return gifs;
}