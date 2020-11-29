import { TodoItem } from "./todo-item/todo-item.component";

export function TodoList(props) {
	return (
		<>
			<button className="undoBtn" onClick={() => props.onReturnItem()}>Bring back</button>
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