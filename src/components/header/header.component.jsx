import { TodoInput } from './todo-input/todo-input.component';
import Paper from '@material-ui/core/Paper';


export function Header(props) {
	return(
		<Paper className="Header" component="header">
			<h1>{ props.children }</h1>
			<p>{ props.paragraph }</p>
			<TodoInput onAdd={props.onItemAdd}></TodoInput>
		</Paper>
	)
}