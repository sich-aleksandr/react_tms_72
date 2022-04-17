import React from "react";
import css from "./todo-list-item.module.css";

export class TodoItem extends React.Component {

  render() {
    const { props, onDelete, onToggle } = this.props;
    return props
      .map(({ id, label, isDone }) => {
        return (
          <li className={css.todo} key={id.toString()}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => onToggle(id)}
            />
            <span className={css.label}>{label}</span>
            {isDone && <button onClick={() => onDelete(id)}>Delete</button>}
          </li>
        );
      });
  }
}
