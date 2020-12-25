import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class TodoInput extends React.Component {
	state = {
		value: "",
		placeholder: "What do you want to do?"
	}

	handleAdd = (event) => {
		event.preventDefault()
		console.log('Clicked the Add button! Current value:', event.target[0].value, this.state.value);
		this.props.onAdd(this.state.value);
		this.setState({value: ""});
	}

	render() {
		return (
			<form className="TodoInput" onSubmit={this.handleAdd}>

				<TextField
				id="newTodoInput"
				variant="outlined"
				label="New to-do item"
				placeholder={this.state.placeholder}
				value={this.state.value}
				onChange={event => this.setState({value: event.target.value})}/>
				
				<Button id="addNewItemBtn" variant="contained" type="submit">ADD</Button>
			</form>
		)

	}
}