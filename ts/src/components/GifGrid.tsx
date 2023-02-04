import { useFetchGif } from "../hooks/useFetchGif"
import { GifItem } from "./GifItem"

type props = {
	category:string
}

export const GifFrid = ({category}: props) => {

	const {images, isLoading}=useFetchGif(category)

	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && ( <h2>Cargando...</h2>)
			}

			<div className="card-grid">
				{
					images&& images.map((image)=>(
						<GifItem
							key={image.id}
							{...image}
						/>
					))
				}
			</div>			
		</>
	)
}
