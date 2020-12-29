import Paper from '@material-ui/core/Paper';
import { TodoInput } from './todo-input/todo-input.component';


export function Header(props) {
	return(
		<Paper
		className="Header"
		component="header"
		style={props.bg}>
			<h1>{ props.children }</h1>
			<p>{ props.paragraph }</p>
			<TodoInput onAdd={props.onItemAdd}></TodoInput>
		</Paper>
	)
}