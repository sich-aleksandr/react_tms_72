import React from "react";
import "./todos-list.css";
import { TodoItem } from "../todo-list-item/Todo-list-item.jsx";

const AddTodo = ({ tasks, onDelete, onToggle }) => {
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

export default AddTodo;
