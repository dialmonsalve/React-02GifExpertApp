import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['One Punch']);

	const onAddcategory = (newcategory) => {

		if( categories.includes(newcategory)) return;

		//setCategories(['valorant',...categories])
		setCategories([newcategory,...categories])
	}

	const onCategory =() =>{

	}

	return (
		<>
			{/* Titulo */}	
			<h1>GifExpertApp</h1>
			{/* Input */}
			<AddCategory /* setCategories={setCategories} */
				onNewcategory={ onAddcategory }
			/>

			{
				categories.map((category) =>(
					<GifGrid
						key={category}
						category={category}
					/>
				))
			}

		</>
		)
	}
