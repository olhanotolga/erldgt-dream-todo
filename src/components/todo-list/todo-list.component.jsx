import React, { useState, useEffect } from 'react';
import { TodoItem } from "./todo-item/todo-item.component";
import Button from '@material-ui/core/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function TodoList(props) {

	const [display, setDisplay] = useState({display: 'block'});

	useEffect(() => {
		setDisplay(props.removedItem === '' || !props.removedItem ? {display: 'none'}: {display: 'block'})
	}, [props.removedItem])

	return (
	<>
		<Button
			last={props.removedItem}
			style={display}
			className="undoBtn"
			onClick={() => props.onReturnItem()}>
				Undo last delete
		</Button>

		<DragDropContext onDragEnd={props.handleOnDragEnd}>
			<Droppable droppableId="TodoList">
				{(provided) => (
					<ul className="TodoList" {...provided.droppableProps} ref={provided.innerRef}>
						{ Array.isArray(props.todos) && props.todos.length > 0 && props.todos.sort((a, b) => a.check - b.check).map((item, index) => {
							return (
								<Draggable key={item.id} draggableId={item.id} index={index}>
									{(provided) => (
										<TodoItem
											innerRef={provided.innerRef}
											provided={provided}
											todo={item.text}
											isChecked={item.check}
											todoIndex={item.id}
											onDelete={props.onItemRemove}
											onItemCheck={props.onChecking}
											isDarkMode={props.mode}
										>
											{item.text}
										</TodoItem>
									)}
								</Draggable>
							)
						}) }
						{provided.placeholder}
					</ul>
				)}
			</Droppable>
		</DragDropContext>
	</>
	)
}