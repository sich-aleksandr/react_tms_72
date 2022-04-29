import React from "react";
import css from "./todo-list-item.module.css";
import { useDispatch, useSelector } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../../store";
import { Link } from "react-router-dom";

export const TodoItem = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(TasksSelectors.getTasks);

  const deleteTask = (id) => dispatch(TasksActionCreators.deleteTask(id));
  const toggleTask = (id) => dispatch(TasksActionCreators.toggleTask(id));

  return tasks.map(({ id, label, isDone }) => {
    return (
      <li className={css.todo} key={id.toString()}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => toggleTask(id)}
        />
        <span className={css.label}>{label}</span>
        <Link to={`/todo/${id}`}>More...</Link>
        {isDone && <button onClick={() => deleteTask(id)}>Delete</button>}
      </li>
    );
  });
};
