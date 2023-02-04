import {Character} from '../interfaces/Character';

type Char={
	id:string,
	title:string,
	url:string,
}

export const getGifs= async(category:string):Promise<Char[]> => {


	const apiKey = import.meta.env.VITE_API_KEY

	const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`

	const resp = await fetch(url)
	
	const {data}:Character = await resp.json()

	const getGifs:Char[] = data.map( gif =>({	
		id:gif.id,
		title:gif.title,
		url:gif.images.downsized_medium.url
	}))

	return getGifs
}
