import React from 'react';
import { AppWrapper } from './components/app-wrapper/app-wrapper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { ThemeProvider } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import './App.css';



class App extends React.Component {
	state = {
		todos: [
			{ id: '2', text: 'Align the switch', check: false},
			{ id: '3', text: 'Add favicon', check: true},
			{ id: '4', text: 'Add functionality for creating new todo items', check: true},
			{ id: '5', text: 'Add functionality for closing/deleting items', check: true},
			{ id: '6', text: 'Create dark & light color themes with Mat-UI', check: true},
			{ id: '7', text: 'Add functionality for dragging/moving items', check: true},
			{ id: '8', text: 'Update README', check: false},
			{ id: '9', text: 'Clear the list', check: false},
			{ id: '10', text: 'Move checked items in the end', check: true},
			{ id: '11', text: 'Un-delete the last item', check: true},
			{ id: '12', text: 'Save items with localStorage', check: false},
			{ id: '13', text: 'Link in the portfolio and Jira', check: false},
			{ id: '14', text: 'Darken the close btns on checked items', check: true},
		],
		lastRemoved: '',
		darkState: localStorage.getItem('theme') === 'dark' ? true : false,
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
		let currentTheme = this.state.darkState ? darkTheme : lightTheme;
		const darkstate = this.state.darkState;

		return (
			<ThemeProvider theme={darkstate ? darkTheme : lightTheme}>
				<main className="App" style={{backgroundColor: currentTheme.palette.background.default}} >
					<Switch checked={darkstate} onChange={this.handleThemeChange} />
					<AppWrapper>
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
					</AppWrapper>
				</main>
			</ThemeProvider>
		);
	}
}

export default App;
