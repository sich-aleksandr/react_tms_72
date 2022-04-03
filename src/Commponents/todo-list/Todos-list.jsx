import React from "react";
import "./todos-list.css";
import {TodoItem} from "../todo-list-item/Todo-list-item.jsx";

const tasks = [
  { id: 1, label: "Выучить JS", isDone: true },
  { id: 2, label: "Выучить React", isDone: false },
  { id: 3, label: "Выучить JS", isDone: true },
  { id: 4, label: "Выучить React", isDone: false },
];

const Todos = () => {
  return (
    <ul className="todo-list" onChange={() => {}}>
      <TodoItem props={tasks} />
    </ul>
  );
};

export default Todos;
