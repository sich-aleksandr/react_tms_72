import React from "react";
import "./app.css";
import Header from "../header";
import AddTodo from "../add-todo";
import SortTodos from "../sort-todo";
import Todos from "../todo-list";
import { filterOptions } from "./constants";
import { connect } from "react-redux";
import { TasksSelectors, TasksActionCreators } from "../../../store";

class AppOriginal extends React.Component {
  render() {
    return (
      <div className="app">
          <Header />
          <AddTodo onAdd={this.props.addTask} />
          <SortTodos
            props={filterOptions}
            onChange={this.props.changeFilter}
            value={this.props.selectedFilter}
          />
          <Todos/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: TasksSelectors.getTasks(state),
  selectedFilter: TasksSelectors.getFilter(state),
  auth: TasksSelectors.getAuth(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteTask: (id) => dispatch(TasksActionCreators.deleteTask(id)),
  toggleTask: (id) => dispatch(TasksActionCreators.toggleTask(id)),
  addTask: (body) => dispatch(TasksActionCreators.addTask(body)),
  changeFilter: (event) => dispatch(TasksActionCreators.changeFilter(event.target.value)),
});

export const App = connect(mapStateToProps, mapDispatchToProps)(AppOriginal);
