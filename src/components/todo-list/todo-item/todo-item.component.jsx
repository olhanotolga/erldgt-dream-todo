import React from 'react';
import { Card, Checkbox, Button } from '@material-ui/core';

export class TodoItem extends React.Component {

	onCheckOnOff = () => {
		this.props.onItemCheck(this.props.todoIndex);
	}

	render() {
		const { provided, innerRef, todoIndex, isChecked, todo, onDelete, isDarkMode } = this.props;

		return (
			<Card
				className={isChecked ? isDarkMode ? "TodoItem checkedItem darkBg" : "TodoItem checkedItem" : "TodoItem"}
				component="li"
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				ref={innerRef}>
				
				<Checkbox
					id={todoIndex}
					checked={isChecked}
					onChange={this.onCheckOnOff} 
				/>
				<span>{todo}</span>
				<Button
					size="small"
					className="todoDelete"
					onClick={() => onDelete(todoIndex)}
				>
						<span className="material-icons">close</span>
				</Button>
			</Card>
		)
	}
}