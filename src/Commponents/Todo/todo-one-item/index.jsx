import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TasksSelectors, TasksAction } from "../../../store";
import css from "../todo-list-item/todo-list-item.module.css";
import { Cork } from "../../common/cork";

const m1 = "You don't have Todo with this number";
const m2 = 'Please try again';

export const TodoOneItem = () => {
  let params = useParams();

  const dispatch = useDispatch();

  const tasks = useSelector(TasksSelectors.getTasks);

  const deleteTask = (id) => dispatch(TasksAction.deleteTask(id));
  const toggleTask = (id) => dispatch(TasksAction.toggleTask(id));

  if (tasks[params.Id - 1] === undefined) {

    return <Cork lable1={m1} lable2={m2} />;
  } else {
    const { id, label, isDone } = tasks[params.Id - 1];
    return (
      <li className={css.todo} key={id.toString()}>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => toggleTask(id)}
        />
        <span className={css.label}>{label}</span>
        {isDone && <button onClick={() => deleteTask(id)}>Delete</button>}
      </li>
    );
  }
};

// const mapStateToProps = (state) => ({
//   tasks: TasksSelectors.getTasks(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   deleteTask: (id) => dispatch(TasksActionCreators.deleteTask(id)),
//   toggleTask: (id) => dispatch(TasksActionCreators.toggleTask(id)),
// });

// export const TodoOneItem = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoOneItemOriginal);
