type props={
	title:string,
	url:string
}


export const GifItem = ({title, url}:props) => {


	return (
		<div className="card" >
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	)
}
