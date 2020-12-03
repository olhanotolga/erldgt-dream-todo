import React from 'react';
import { AppWrapper } from './components/app-wrapper/app-wrapper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component';
import './App.css';


class App extends React.Component {
	state = {
		todos: [
			{ id: 1, text: 'Create the main components', check: false},
			{ id: 2, text: 'Add CSS for layout', check: false},
			{ id: 3, text: 'See how it all looks on the screen', check: false},
			{ id: 4, text: 'Add functionality for creating new todo items', check: false},
			{ id: 12, text: 'Add functionality for checking off items', check: false},
			{ id: 5, text: 'Add functionality for closing/deleting items', check: false},
			{ id: 6, text: 'Add styles (fonts and colors)', check: false},
			{ id: 7, text: 'Add functionality for dragging/moving items', check: false},
			{ id: 8, text: 'Change bg color on checking off items', check: false},
			{ id: 9, text: 'Adjust font size with clamp()', check: false},
			{ id: 10, text: 'Move checked items in the end', check: false},
			{ id: 11, text: 'Bring the last item back', check: false},
			{ id: 13, text: 'Set checked attr from the todos item props', check: false},
		],
		lastRemoved: ''
	}

	addItem = (newTodo) => {
		if (newTodo !== "" && newTodo.trim() !== "") {
			let id = Date.now();
			let newItem = {
				text: newTodo,
				id: id,
				check: false
			}
			this.setState({ todos: [...this.state.todos, newItem] })
		}
	}

	deleteItem = (itemID) => {
		const newArray = [...this.state.todos];
		let removedItem;
		for (let todo of this.state.todos) {
			if (todo.id === itemID) {
				removedItem = todo;
			}
		}
		let targetItemIndex = this.state.todos.indexOf(removedItem);
		let removed = newArray.splice(targetItemIndex, 1);
		// console.log(removed[0]);
		this.setState({ todos: newArray });
		this.setState({ lastRemoved: removed[0] })
	}

	returnItem = () => {
		const newArray = [...this.state.todos];
		if (!this.state.todos.includes(this.state.lastRemoved) && this.state.lastRemoved) {
			this.setState({ todos: [...newArray, this.state.lastRemoved] })
		}
	}

	changeStateOfCheckedItem = (itemID) => {
		// console.log('sort items in progress, item changed:', itemID);
		let checkedItem;
		for (let todo of this.state.todos) {
			if (todo.id === itemID) {
				checkedItem = todo;
			}
		}
		
		let newCheckState = !checkedItem.check;

		this.setState(() => {
			const newArray = [...this.state.todos];
			let targetItemIndex = this.state.todos.indexOf(checkedItem);
			newArray[targetItemIndex].check = newCheckState;
			return { todos: newArray };
		})
	}

	render() {
		return (
			<main className="App">
				<AppWrapper>
					<Header
						onItemAdd={this.addItem}
						paragraph="Create and manage your to-do list and try to not feel overwhelmed!">
							<span class="material-icons">check</span>erldgt
					</Header>

					<TodoList
						todos={this.state.todos}
						removedItem={this.state.lastRemoved}
						onItemRemove={this.deleteItem}
						onReturnItem={this.returnItem}
						onChecking={this.changeStateOfCheckedItem}/>
				</AppWrapper>
			</main>
		);
	}
}

export default App;
