import React from "react";
import css from "./todo-list-item.module.css";

export const FILTER_STATUSES = {
  ALL: "all",
  COMPLEATED: "compleated",
  ACTIVE: "active",
};

export class TodoItem extends React.Component {
  filterTodo = (filter, todo) => {
    if (filter === "ALL") {
      return true;
    }

    if (filter === "COMPLEATED") {
      return todo.isDone;
    }

    return !todo.isDone;
  };

  render() {
    const { props, onDelete, onToggle, satusFilter } = this.props;
    const filter = `${satusFilter}`;
    return props
      .filter((user) => this.filterTodo(filter, user))
      .map(({ id, label, isDone }) => {
        return (
          <li className={css.todo} key={id.toString()}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => onToggle(id)}
            />
            <span className={css.label}>{label}</span>
            <button onClick={() => onDelete(id)}>Delete</button>
          </li>
        );
      });
  }
}
