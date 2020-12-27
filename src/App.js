import React from 'react';
import { AppWrapper } from './components/app-wrapper/app-wrapper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';



class App extends React.Component {
	state = {
		todos: [
			{ id: '1', text: 'Create the main components', check: true},
			{ id: '2', text: 'Add CSS for layout', check: true},
			{ id: '4', text: 'Add functionality for creating new todo items', check: true},
			{ id: '5', text: 'Add functionality for closing/deleting items', check: true},
			{ id: '6', text: 'Create dark & light color themes with Mat-UI', check: false},
			{ id: '7', text: 'Add functionality for dragging/moving items', check: true},
			{ id: '10', text: 'Move checked items in the end', check: true},
			{ id: '11', text: 'Bring the last deleted item back', check: true},
			{ id: '12', text: 'Add functionality for checking off items', check: true},
		],
		lastRemoved: '',
		darkState: false
	}

	handleThemeChange = () => {
		this.setState({ darkState: !this.state.darkState });
	};

	addItem = (newTodo) => {
		if (newTodo !== "" && newTodo.trim() !== "") {
			let id = Date.now().toString();
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
			if (todo.id === itemID) removedItem = todo;
		}
		let targetItemIndex = this.state.todos.indexOf(removedItem);
		let removed = newArray.splice(targetItemIndex, 1);
		console.log(removed[0]);
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
		let checkedItem;
		for (let todo of this.state.todos) {
			if (todo.id === itemID) checkedItem = todo;
		}
		
		let newCheckState = !checkedItem.check;

		this.setState(() => {
			const newArray = [...this.state.todos];
			let targetItemIndex = this.state.todos.indexOf(checkedItem);
			newArray[targetItemIndex].check = newCheckState;
			return { todos: newArray };
		})
	}

	dragAndDropItem = (result) => {
		console.log('let\'s try to do this!', result);
		if (!result.destination) return;
		
		const newArray = [...this.state.todos];
		const [reorderedItem] = newArray.splice(result.source.index, 1);
		newArray.splice(result.destination.index, 0, reorderedItem);

		this.setState({ todos: newArray })
	}

	render() {
		return (
			<ThemeProvider theme={this.state.darkState ? darkTheme : lightTheme}>
				<main className="App">
					<Switch checked={this.state.darkState} onChange={this.handleThemeChange} />
					<AppWrapper>
						<Header
							onItemAdd={this.addItem}
							color="primary"
							paragraph="Create and manage your to-do list and try to not feel overwhelmed!">
								<span className="material-icons">check</span>erldgt
						</Header>

						<TodoList
							todos={this.state.todos}
							removedItem={this.state.lastRemoved}
							onItemRemove={this.deleteItem}
							onReturnItem={this.returnItem}
							onChecking={this.changeStateOfCheckedItem}
							handleOnDragEnd={this.dragAndDropItem}
						/>
					</AppWrapper>
				</main>
			</ThemeProvider>
		);
	}
}

export default App;
