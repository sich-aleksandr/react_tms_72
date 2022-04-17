import React from "react";
import "./todos-list.css";
import { TodoItem } from "../todo-list-item/Todo-list-item.jsx";

export default class AddTodo extends React.Component {
  render() {
    const { tasks, onDelete, onToggle } = this.props;
    return (
      <ul className="todo-list">
        <TodoItem
          props={tasks}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      </ul>
    );
  }
}
