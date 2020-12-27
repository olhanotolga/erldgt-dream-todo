import React from 'react';
import { TodoItem } from "./todo-item/todo-item.component";
import Button from '@material-ui/core/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export function TodoList(props) {

	return (
		<>
			<Button variant="contained" className="undoBtn" onClick={() => props.onReturnItem()}>Bring back</Button>
			<DragDropContext onDragEnd={props.handleOnDragEnd}>
				<Droppable droppableId="TodoList">
					{(provided) => (
						<ul className="TodoList" {...provided.droppableProps} ref={provided.innerRef}>
							{ props.todos.sort((a, b) => {
									return (a.check - b.check)
								}).map((item, index) => {
								
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