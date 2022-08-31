import React from "react";

class TodoHeader extends React.Component {
  render() {
    return (
      <header className="todo-header">
        <input
          placeholder="todo name"
          value={this.props.todoName}
          onChange={this.props.onTodoNameChange}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              this.props.onAddTodoClick();
            }
          }}
        />
        <button onClick={this.props.onAddTodoClick}>Add</button>
      </header>
    );
  }
}

export default TodoHeader;
