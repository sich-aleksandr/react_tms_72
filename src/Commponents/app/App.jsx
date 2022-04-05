import React from "react";
import "./app.css";
import Header from "../header";
import AddTodo from "../add-todo"
import SortTodos from "../sort-todo"
import Todos from "../todo-list"
import { filterOptions } from "../todo-list-item/Todo-list-item.jsx"

export default class App extends React.Component {

  render() {
  return (
      <div className="app">
          <Header />
          <AddTodo />
          <SortTodos props={filterOptions}/>
          <Todos />
      </div>
  )
}
}

