import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { CharArray } from "../interfaces/Char";

const initialCategories: CharArray=[{
	id:"",
	title:"",
	url:""
}]

export const useFetchGif = (category:string) => {

	const [images, setImages] = useState<CharArray>(initialCategories)
	const [isLoading, setIsLoading] = useState<boolean>(true)

	const getImages = async()=>{
		const newImages:any = await getGifs(category);
		setImages(newImages)
		setIsLoading(false)		
	}

	useEffect(() => {
		getImages()
	}, [])

	return {
		images,
		isLoading
	}
	
}
