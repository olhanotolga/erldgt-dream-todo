import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

export function TodoInput(props) {
	const [value, setValue] = useState('');
	
	const handleAdd = (event) => {
		event.preventDefault()
		props.onAdd(value);
		setValue('');
	}
	
	return (
		<form className="TodoInput" onSubmit={handleAdd}>
			
			<TextField
			id="newTodoInput"
			label="New to-do item"
			placeholder='What do you want to do?'
			value={value}
			onChange={event => setValue(event.target.value)}/>
			
			<Button id="addNewItemBtn" type="submit">ADD</Button>
		</form>
	)
}