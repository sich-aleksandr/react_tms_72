import React from "react";
import css from "./todo-list-item.module.css";

export const FILTER_STATUSES = {
  ALL: 'all',
  COMPLEATED: 'compleated',
  ACTIVE: 'active',
}

export const filterOptions = [
  {id: 'all', value: FILTER_STATUSES.ALL, label: 'Все', isChecked: 'checked' },
  {id: 'inprogres', value: FILTER_STATUSES.ACTIVE, label: 'Активные', isChecked: '' },
  {id: 'compleated', value: FILTER_STATUSES.COMPLEATED, label: 'Завершенные', isChecked: '' },
];

const filter = FILTER_STATUSES.ALL;

const filterTodo = (filter, todo) => {
  if (filter === FILTER_STATUSES.ALL) {
    return true;
  }

  if (filter === FILTER_STATUSES.COMPLEATED) {
    return todo.isDone;
  }

  return !todo.isDone;
}

export const TodoItem = ({ props }) => {
  return props.filter((user) => filterTodo(filter, user)).map(({ id, label, isDone }) => {
    return (
      <li className={css.todo} key={id.toString()}>
        <input type="checkbox" checked={isDone} onChange={() => {}} />
        <span className={css.label}>{label}</span>
      </li>
    );
  });
};

