import{ useState } from "react"


interface props{
	onNewCategory:(category:string)=>void
};

export const AddCategory = ({ onNewCategory } :props) => {

	const [inputValue, setInputValue] = useState<string>('')

	const onInputChange = ({target}:React.ChangeEvent<HTMLInputElement>)=>{
		const {value} = target

		setInputValue(value)
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		
		e.preventDefault()

		if(inputValue.trim().length <=1) return;

		onNewCategory(inputValue.trim())
		setInputValue('')
	}


	return (

		<form onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Buscar gift"
				value={inputValue}
				onChange={onInputChange}
				>	
			
			</input>
		</form>
	)
}
