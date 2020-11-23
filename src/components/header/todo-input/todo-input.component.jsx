export function TodoInput() {
	return (
		<form className="TodoInput">
			<label htmlFor="newTodoInput">New to-do item</label>
			<input type="text" id="newTodoInput" placeholder="What do you want to do?"/>
			<button id="addNewItemBtn">ADD</button>
		</form>
	)
}