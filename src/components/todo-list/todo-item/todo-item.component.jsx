export function TodoItem(props) {
	return (
		<li className="TodoItem">
			<div className="todoCheck">
				<input className="todoCheckHidden" id={props.idx} type="checkbox"/>
				<label className="todoNewCheck" htmlFor={props.idx}></label>
			</div>
			<span>{props.todo}</span>
			<button className="todoDelete">✘</button>
		</li>
	)
}