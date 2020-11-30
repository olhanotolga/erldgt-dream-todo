import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';

export class TodoItem extends React.Component {

	// on checking the item off/back on
	onCheckOnOff = () => {
		// change the check prop of the todos object
		this.props.onItemCheck(this.props.todoIndex);
	}

	render() {
		return (
			<Card className={this.props.isChecked ? "TodoItem checkedItem" : "TodoItem"} component="li">
				<Checkbox
					id={this.props.todoIndex}
					color="default"
					checked={this.props.isChecked}
					onChange={this.onCheckOnOff} 
				/>
				<span>{this.props.todo}</span>
				<Button
					variant="contained"
					size="small"
					className="todoDelete"
					onClick={() => this.props.onDelete(this.props.todoIndex)}
				>
						<span class="material-icons">close</span>
				</Button>
			</Card>
		)
	}
}