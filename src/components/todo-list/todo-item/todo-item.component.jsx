import React from 'react';

export class TodoItem extends React.Component {

	// on checking the item off/back on
	onCheckOnOff = () => {
		// change the check prop of the todos object
		this.props.onItemCheck(this.props.todoIndex);
	}

	render() {
		return (
			<li className={this.props.isChecked ? "TodoItem checkedItem" : "TodoItem"}>
				<div className="todoCheck">
					<input
						className="todoCheckHidden"
						id={this.props.todoIndex}
						type="checkbox"
						checked={this.props.isChecked}
						onChange={this.onCheckOnOff} 
					/>
					<label
						className="todoNewCheck"
						htmlFor={this.props.todoIndex}
					></label>
				</div>
				<span>{this.props.todo}</span>
				<button className="todoDelete" onClick={() => this.props.onDelete(this.props.todoIndex)}>✘</button>
			</li>
		)
	}
}