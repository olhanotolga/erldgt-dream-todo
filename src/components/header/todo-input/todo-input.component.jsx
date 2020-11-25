import React from 'react';

export class TodoInput extends React.Component {
	state = {
		value: "lololo"
	}

	handleAdd = (event) => {
		event.preventDefault()
		console.log('Clicked the Add button!');
		console.log(event.target[0].value);
		this.props.onAdd(this.state.value)
	}

	render() {
		return (
			<form className="TodoInput" onSubmit={this.handleAdd}>
				<label htmlFor="newTodoInput">New to-do item</label>
				<input type="text" id="newTodoInput" placeholder="What do you want to do?" value={this.state.value} onChange={event => this.setState({value: event.target.value})}/>
				<button id="addNewItemBtn">ADD</button>
			</form>
		)

	}
}