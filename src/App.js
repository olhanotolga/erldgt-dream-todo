import React from 'react';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { ThemeProvider } from '@material-ui/core/styles';
import { FormControlLabel, Switch } from '@material-ui/core';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { CssBaseline } from '@material-ui/core'
import './App.css';

class App extends React.Component {
	state = {
		todos: JSON.parse(localStorage.getItem("todos")) || [],
		lastRemoved: '',
		darkState: localStorage.getItem('theme') === 'dark' ? true : false,
	}

	saveTodos = (newTodos) => {
		localStorage.setItem("todos", JSON.stringify(newTodos));
	}

	handleThemeChange = () => {
		localStorage.setItem('theme', this.state.darkState ? 'light' : 'dark');
		this.setState(prev => ({ darkState: !prev.darkState }));
	};

	addItem = (newTodo) => {
		if (newTodo !== "" && newTodo.trim() !== "") {
			let id = Date.now().toString();
			let newItem = {
				text: newTodo,
				id: id,
				check: false
			}
			const newArray = [...this.state.todos, newItem];
			this.setState({ todos:  newArray})
			this.saveTodos(newArray)
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
		
		this.setState({ todos: newArray });
		this.saveTodos(newArray);
		this.setState({ lastRemoved: removed[0] });
	}

	returnItem = () => {
		if (!this.state.todos.includes(this.state.lastRemoved) && this.state.lastRemoved) {
			const newArray = [...this.state.todos, this.state.lastRemoved];
			this.setState({ todos: newArray });
			this.saveTodos(newArray);
		}
	}

	changeStateOfCheckedItem = (itemID) => {
		let checkedItem;
		for (let todo of this.state.todos) {
			if (todo.id === itemID) checkedItem = todo;
		}
		
		let newCheckState = !checkedItem.check;

		let targetItemIndex = this.state.todos.indexOf(checkedItem);
		const newArray = [...this.state.todos];
		newArray[targetItemIndex].check = newCheckState;

		this.setState({ todos: newArray });
		this.saveTodos(newArray);
	}

	dragAndDropItem = (result) => {
		if (!result.destination) return;
		
		const newArray = [...this.state.todos];
		const [reorderedItem] = newArray.splice(result.source.index, 1);
		newArray.splice(result.destination.index, 0, reorderedItem);

		this.setState({ todos: newArray });
		this.saveTodos(newArray);
	}

	render() {
		let currentTheme = this.state.darkState ? darkTheme : lightTheme;
		const darkstate = this.state.darkState;

		return (
			<ThemeProvider theme={darkstate ? darkTheme : lightTheme}>
				<CssBaseline />
				<main className="App">
					<FormControlLabel
						control={<Switch checked={darkstate} onChange={this.handleThemeChange}/>}
						label="Change theme"
					/>
					<section className="Wrapper">
						<Header
							bg={{backgroundColor: currentTheme.palette.secondary.dark}}
							onItemAdd={this.addItem}
							paragraph="Create and manage your to-do list and try to not feel overwhelmed!">
								<span className="material-icons" style={{color: darkstate ? darkTheme.palette.primary.dark : lightTheme.palette.primary.light}}>check</span>erldgt
						</Header>

						<TodoList
							todos={this.state.todos}
							removedItem={this.state.lastRemoved}
							onItemRemove={this.deleteItem}
							onReturnItem={this.returnItem}
							onChecking={this.changeStateOfCheckedItem}
							handleOnDragEnd={this.dragAndDropItem}
							mode={this.state.darkState}
						/>
					</section>
				</main>
			</ThemeProvider>
		);
	}
}

export default App;
