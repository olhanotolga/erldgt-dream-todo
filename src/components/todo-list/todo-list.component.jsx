import { TodoItem } from "./todo-item/todo-item.component";

export function TodoList(props) {
	return (
		<ul className="TodoList">
			{ props.todos.map((item, idx) => <TodoItem todo={item} idx={"idx" + idx}>{item}</TodoItem>) }
		</ul>
	)
}