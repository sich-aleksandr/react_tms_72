import React from "react";
import css from "./todo-list-item.module.css";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../../store";
import { Link } from "react-router-dom";

export class TodoItemOriginal extends React.Component {
  
  render() {
      return this.props.tasks.map(({ id, label, isDone }) => {
      return (
        <li className={css.todo} key={id.toString()}>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => this.props.toggleTask(id)}
          />
          <span className={css.label}>{label}</span>
          <Link to={`/todo/${id}`}>More...</Link>
          {isDone && <button onClick={() => this.props.deleteTask(id)}>Delete</button>}
        </li>
      );
    });
  }
}

const mapStateToProps = (state) => ({
  tasks: TasksSelectors.getTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(TasksActionCreators.deleteTask(id)),
  toggleTask: (id) => dispatch(TasksActionCreators.toggleTask(id)),
});

export const TodoItem = connect(mapStateToProps, mapDispatchToProps)(TodoItemOriginal);



