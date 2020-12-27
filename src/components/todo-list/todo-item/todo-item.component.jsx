import React from 'react';
import { Card, Checkbox, Button } from '@material-ui/core';

export class TodoItem extends React.Component {

	onCheckOnOff = () => {
		this.props.onItemCheck(this.props.todoIndex);
	}

	render() {
		const { provided, innerRef, todoIndex, isChecked, todo, onDelete } = this.props;

		return (
			<Card
				className={isChecked ? "TodoItem checkedItem" : "TodoItem"}
				component="li"
				{...provided.draggableProps}
				{...provided.dragHandleProps}
				ref={innerRef}>
				
				<Checkbox
					id={todoIndex}
					color="default"
					checked={isChecked}
					onChange={this.onCheckOnOff} 
				/>
				<span>{todo}</span>
				<Button
					variant="contained"
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