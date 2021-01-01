import React, { useState } from 'react';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component';
import { ThemeProvider } from '@material-ui/core/styles';
import { FormControlLabel, Switch } from '@material-ui/core';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';
import { CssBaseline } from '@material-ui/core'
import './App.css';

function App() {
	const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
	const [lastRemoved, setLastRemoved] = useState('');
	const [darkState, setDarkState] = useState(localStorage.getItem('theme') === 'dark' ? true : false);

	const saveTodos = (newTodos) => {
		localStorage.setItem("todos", JSON.stringify(newTodos));
	}

	const handleThemeChange = () => {
		localStorage.setItem('theme', darkState ? 'light' : 'dark');
		setDarkState(prevDarkState => !prevDarkState);
	};

	const addItem = (newTodo) => {
		if (newTodo !== "" && newTodo.trim() !== "") {
			let id = Date.now().toString();
			let newItem = {
				text: newTodo,
				id: id,
				check: false
			}
			const newArray = [...todos, newItem];
			setTodos(newArray);
			saveTodos(newArray);
		}
	}

	const deleteItem = (itemID) => {
		const newArray = [...todos];
		let removedItem;
		for (let todo of todos) {
			if (todo.id === itemID) removedItem = todo;
		}
		let targetItemIndex = todos.indexOf(removedItem);
		let removed = newArray.splice(targetItemIndex, 1);
		
		setTodos(newArray );
		saveTodos(newArray);
		setLastRemoved(removed[0]);
	}

	const returnItem = () => {
		if (!todos.includes(lastRemoved) && lastRemoved) {
			const newArray = [...todos, lastRemoved];
			setTodos(newArray );
			saveTodos(newArray);
		}
	}

	const changeStateOfCheckedItem = (itemID) => {
		let checkedItem;
		for (let todo of todos) {
			if (todo.id === itemID) checkedItem = todo;
		}
		
		let newCheckState = !checkedItem.check;

		let targetItemIndex = todos.indexOf(checkedItem);
		const newArray = [...todos];
		newArray[targetItemIndex].check = newCheckState;

		setTodos(newArray );
		saveTodos(newArray);
	}

	const dragAndDropItem = (result) => {
		if (!result.destination) return;
		
		const newArray = [...todos];
		const [reorderedItem] = newArray.splice(result.source.index, 1);
		newArray.splice(result.destination.index, 0, reorderedItem);

		setTodos(newArray);
		saveTodos(newArray);
	}

	let currentTheme = darkState ? darkTheme : lightTheme;

	return (
		<ThemeProvider theme={darkState ? darkTheme : lightTheme}>
			<CssBaseline />
			<main className="App">
				<FormControlLabel
					control={<Switch checked={darkState} onChange={handleThemeChange}/>}
					label="Change theme"
				/>
				<section className="Wrapper">
					<Header
						bg={{backgroundColor: currentTheme.palette.secondary.dark}}
						onItemAdd={addItem}
						paragraph="Create and manage your to-do list and try to not feel overwhelmed!">
							<span className="material-icons" style={{color: darkState ? darkTheme.palette.primary.dark : lightTheme.palette.primary.light}}>check</span>erldgt
					</Header>

					<TodoList
						todos={todos}
						removedItem={lastRemoved}
						onItemRemove={deleteItem}
						onReturnItem={returnItem}
						onChecking={changeStateOfCheckedItem}
						handleOnDragEnd={dragAndDropItem}
						mode={darkState}
					/>
				</section>
			</main>
		</ThemeProvider>
	);
}

export default App;
