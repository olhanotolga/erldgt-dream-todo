import { TodoInput } from './todo-input/todo-input.component';

export function Header(props) {
	return(
		<header className="Header">
			<h1>{ props.children }</h1>
			<p>{ props.paragraph }</p>
			<TodoInput onAdd={props.onItemAdd}></TodoInput>
		</header>
	)
}