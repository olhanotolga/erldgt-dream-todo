import React from 'react';
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-wrapper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todo-list.component';

class App extends React.Component {
	state = {
		todos: ['Create the main components', 'Add CSS for layout', 'See how it all looks on the screen', 'Add function(s|ality) for creating new todo items', 'Add function(s|ality) for checking off items', 'Add function(s|ality) for closing/deleting items', 'Add styles (fonts and colors)', 'Add function(s|ality) for dragging/moving items',]
	}
	render() {
		return (
			<main className="App">
				<AppWrapper>
					
					<Header title="✔︎erldgt" paragraph="Create and manage your to-do list and try to not feel overwhelmed!">

					</Header>
					<TodoList todos={this.state.todos}>
					</TodoList>
				</AppWrapper>
			</main>
		);
	}
}

export default App;
