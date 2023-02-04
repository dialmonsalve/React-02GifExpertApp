import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifFrid } from "./components/GifGrid"
import { Character } from "./interfaces/Character";

const initialCategories: Character[]=[
	{
		data: [	{		
			id:"",
			title:"",
			url:"",
			images:{
				downsized_medium:{
					url:""
				}
			}
		}
		]
	}
]

export const GifExpertApp = () => {

	const [categories, setCategories] = useState<Character[]>(initialCategories)

	const onAddCategory = (category: string)=>{

		const newCategory:Character = {
			data: [	{		
				id:"1",
				title:category,
				url:"",
				images:{
					downsized_medium:{
						url:""
					}
				}
			}
			]
		}	
		setCategories([newCategory, ...categories])
	}

	return (

		<>
			<h1>GifExpertApp</h1>

			<AddCategory 
				//setCategories={setCategories}
				onNewCategory={onAddCategory}
			/>

			{
				categories.map((data=>
					data.data.map( id=> (
						<GifFrid 
							key={id.id}
							category={id.title}
							/> 						
						))
				))
			}
		</>
	)
}
