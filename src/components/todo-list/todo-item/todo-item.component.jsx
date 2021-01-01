import React from 'react';
import { Card, Checkbox, Button } from '@material-ui/core';

export function TodoItem(props) {

	const onCheckOnOff = () => {
		props.onItemCheck(props.todoIndex);
	}
	
	const { provided, innerRef, todoIndex, isChecked, todo, onDelete, isDarkMode } = props;

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
				onChange={onCheckOnOff} 
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