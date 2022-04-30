import React from "react";
import "./app.css";
import Header from "../header";
import AddTodo from "../add-todo";
import SortTodos from "../sort-todo";
import Todos from "../todo-list";
import { filterOptions } from "./constants";
import { useSelector, useDispatch } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../../store";

export const App = () => {
  const dispatch = useDispatch();
  const changeFilter = ({target}) =>
    dispatch(TasksActionCreators.changeFilter(target.value));

  const selectedFilter = useSelector(TasksSelectors.getFilter);

  return (
    <div className="app">
      <Header />
      <AddTodo />
      <SortTodos
        props={filterOptions}
        onChange={changeFilter}
        value={selectedFilter}
      />
      <Todos />
    </div>
  );
};
