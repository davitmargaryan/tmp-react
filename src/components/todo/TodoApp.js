import React from "react";
import { v4 as uuid4 } from "uuid";
import Counts from "./Counts";
import Filter from "./Filter";
import TodoHeader from "./TodoHeader";
import TodoItems from "./TodoItems";

class TodoApp extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      filter: "All", // 'All' | 'Checked' | 'Unchecked'
      todoName: "",
      todoItems: [
        {
          id: uuid4(),
          name: "first todo",
          done: true,
        },
        {
          id: uuid4(),
          name: "second todo",
          done: false,
        },
      ],
    };
  }

  onTodoNameChange = (e) => {
    this.setState({
      todoName: e.target.value,
    });
  };

  onAddTodoClick = () => {
    if (!this.state.todoName) {
      alert("please type todo name");
      return;
    }
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { id: uuid4(), name: this.state.todoName },
      ],
      todoName: "",
    });
  };

  onRemoveButtonClick = (id) => {
    // const newTodoItemsWithout = this.state.todoItems.filter(
    //   (todoItem) => todoItem.id !== id
    // );

    const newTodoItemsWithout = [...this.state.todoItems];
    const removedIndex = newTodoItemsWithout.findIndex((el) => el.id === id);
    newTodoItemsWithout.splice(removedIndex, 1);

    this.setState({
      todoItems: newTodoItemsWithout,
    });
  };

  onChangeTodoState = (id) => {
    const newTodoItemsWithout = this.state.todoItems.map((todoItem) => {
      if (todoItem.id === id) {
        return {
          ...todoItem,
          done: !todoItem.done,
        };
      } else {
        return todoItem;
      }
    });

    // const newTodoItemsWithout = [...this.state.todoItems];

    // const clickedTodo = newTodoItemsWithout.find((el) => el.id === id);
    // const clickedTodoIndex = newTodoItemsWithout.findIndex(
    //   (el) => el.id === id
    // );

    // newTodoItemsWithout.splice(clickedTodoIndex, 1, {
    //   ...clickedTodo,
    //   done: !clickedTodo.done,
    // });

    this.setState({
      todoItems: newTodoItemsWithout,
    });
  };

  onFilterChange = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    return (
      <div className="main-wrapper">
        <TodoHeader
          onTodoNameChange={this.onTodoNameChange}
          todoName={this.state.todoName}
          onAddTodoClick={this.onAddTodoClick}
        />
        <TodoItems
          onChangeTodoState={this.onChangeTodoState}
          onRemoveButtonClick={this.onRemoveButtonClick}
          todoItems={this.state.todoItems.filter((item) => {
            if (this.state.filter === "All") {
              return true;
            } else if (this.state.filter === "Checked") {
              return item.done;
            } else {
              return !item.done;
            }
          })}
        />
        <Counts
          allCount={this.state.todoItems.length}
          checkedCount={this.state.todoItems.filter((el) => el.done).length}
          uncheckedCount={this.state.todoItems.filter((el) => !el.done).length}
        />
        <Filter
          filter={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
      </div>
    );
  }
}

export default TodoApp;
