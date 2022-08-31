import React from "react";
import TodoItem from "./TodoItem";

class TodoItems extends React.Component {
  render() {
    return (
      <section>
        {this.props.todoItems.map((todoItem) => (
          <TodoItem
            onChangeTodoState={this.props.onChangeTodoState}
            onRemoveButtonClick={this.props.onRemoveButtonClick}
            key={todoItem.id}
            todoItem={todoItem}
          />
        ))}
      </section>
    );
  }
}

export default TodoItems;
