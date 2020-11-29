import React from 'react';

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
				<label htmlFor="newTodoInput">New to-do item</label>

				<input
				type="text"
				id="newTodoInput"
				placeholder={this.state.placeholder}
				value={this.state.value}
				onChange={event => this.setState({value: event.target.value})}/>
				
				<button id="addNewItemBtn">ADD</button>
			</form>
		)

	}
}