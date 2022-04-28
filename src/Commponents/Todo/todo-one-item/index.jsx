import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../../store";
import css from "../todo-list-item/todo-list-item.module.css";
import { Cork } from "../../common/cork";

const m1 = "You don't have Todo with this number";
const m2 = 'Please try again';

const TodoOneItemOriginal = (props) => {
  let params = useParams();
  if (props.tasks[params.Id - 1] === undefined) {

    return <Cork lable1={m1} lable2={m2} />;
  } else {
    const { id, label, isDone } = props.tasks[params.Id - 1];
    return (
      <li className={css.todo} key={id.toString()}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => props.toggleTask(id)}
        />
        <span className={css.label}>{label}</span>
        {isDone && <button onClick={() => props.deleteTask(id)}>Delete</button>}
      </li>
    );
  }
};

const mapStateToProps = (state) => ({
  tasks: TasksSelectors.getTasks(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(TasksActionCreators.deleteTask(id)),
  toggleTask: (id) => dispatch(TasksActionCreators.toggleTask(id)),
});

export const TodoOneItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoOneItemOriginal);
