import { TodoItem } from "./todo-item/todo-item.component";
import Button from '@material-ui/core/Button';

export function TodoList(props) {
	return (
		<>
			<Button variant="contained" className="undoBtn" onClick={() => props.onReturnItem()}>Bring back</Button>
			<ul className="TodoList">
				{ props.todos.sort((a, b) => {
						return (a.check - b.check)
					}).map((item) => {
					
						return (
							<TodoItem
								todo={item.text}
								key={item.id}
								isChecked={item.check}
								todoIndex={item.id}
								onDelete={props.onItemRemove}
								onItemCheck={props.onChecking}
							>
							{item.text}
							</TodoItem>
						)
				}) }
			</ul>
		</>
	)
}