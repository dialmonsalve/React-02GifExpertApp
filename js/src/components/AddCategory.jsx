import { useState } from "react"

export const AddCategory = ({ onNewcategory }) => {

	const [inputValue, setInputValue] = useState('');

	const onChanged = ({target:{value}}) => {

		setInputValue(value)

	}

	const onSubmit = (e) => {

		e.preventDefault();

		if(inputValue.trim().length<=1) return;

		//setCategories(categories => [inputValue, ...categories]);
		onNewcategory(inputValue.trim());
		setInputValue('')

	}

	return (

		<form onSubmit={ onSubmit }>
			
			<input
			type="text"
			placeholder="Buscar gifs"
			value={ inputValue }
			onChange={ e => onChanged(e)} //El evento es opcional
			/>

		</form>

	)
}
