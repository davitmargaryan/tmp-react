import React from "react";
import { ThemeConsumer } from "../../contexts/ThemeContext";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item-wrapper">
        <input
          type="checkbox"
          checked={this.props.todoItem.done}
          onChange={() => this.props.onChangeTodoState(this.props.todoItem.id)}
        />
        <ThemeConsumer>
          {(val) => {
            return (
              <div
                style={{
                  color: val,
                }}
              >
                {this.props.todoItem.name}
              </div>
            );
          }}
        </ThemeConsumer>
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
