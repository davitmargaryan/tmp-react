import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item-wrapper">
        <input
          type="checkbox"
          checked={this.props.todoItem.done}
          onChange={() => this.props.onChangeTodoState(this.props.todoItem.id)}
        />
        <div>{this.props.todoItem.name}</div>
        <button
          onClick={() => {
            console.log("called button onclick in TodoItem cmp");

            this.props.onRemoveButtonClick(this.props.todoItem.id);
          }}
        >
          X
        </button>
      </div>
    );
  }
}

export default TodoItem;
