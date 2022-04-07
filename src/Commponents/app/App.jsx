import React from "react";
import "./app.css";
import Header from "../header";
import AddTodo from "../add-todo";
import SortTodos from "../sort-todo";
import Todos from "../todo-list";

const FILTER_STATUSES = {
  ALL: "all",
  COMPLEATED: "compleated",
  ACTIVE: "active",
};

// const filterOptions = [
//   {id: 'ALL', value: FILTER_STATUSES.ALL, label: 'Все', isChecked: 'checked' },
//   {id: 'ACTIVE', value: FILTER_STATUSES.ACTIVE, label: 'Активные', isChecked: '' },
//   {id: 'COMPLEATED', value: FILTER_STATUSES.COMPLEATED, label: 'Завершенные', isChecked: '' },
// ];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { id: 1, label: "Выучить JS", isDone: true },
        { id: 2, label: "Выучить React", isDone: true },
        { id: 3, label: "Выучить Redux", isDone: false },
        { id: 4, label: "Выучить ВСЕ", isDone: false },
      ],
      taskInput: "",
      filterOptions: [
        {
          id: "ALL",
          value: FILTER_STATUSES.ALL,
          label: "Все",
          isChecked: true,
        },
        {
          id: "ACTIVE",
          value: FILTER_STATUSES.ACTIVE,
          label: "Активные",
          isChecked: false,
        },
        {
          id: "COMPLEATED",
          value: FILTER_STATUSES.COMPLEATED,
          label: "Завершенные",
          isChecked: false,
        },
      ],
    };
    this.maxId = 5;
  }
  addTodo = (body) => {
    const newItem = {
      id: this.maxId++,
      label: body,
      important: false,
    };

    this.setState(({ tasks }) => {
      const newArr = [...tasks, newItem];
      return {
        tasks: newArr,
      };
    });
  };

  deleteTodoHandler = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(({ id: tasksID }) => tasksID !== id),
    }));
  };

  toggleCheckbox = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return { ...task, isDone: !task.isDone };
      }),
    }));
  };

  changeFilterHandler = (e) => {
    this.setState((prevState) => ({
      filterOptions: prevState.filterOptions.map((task) => {
        if (task.id !== e.target.id) {
          return { ...task, isChecked: false };
        }
        return { ...task, isChecked: true };
      }),
    }));
  };

  render() {
    const [filterStatus] = this.state.filterOptions.filter(
      (item) => item.isChecked
    );

    return (
      <div className="app">
        <Header />
        <AddTodo onAdd={this.addTodo} />
        <SortTodos
          props={this.state.filterOptions}
          onChange={this.changeFilterHandler}
          value={this.state.filter}
        />
        <Todos
          tasks={this.state.tasks}
          onDelete={this.deleteTodoHandler}
          onToggle={this.toggleCheckbox}
          satusFilter={filterStatus.id}
        />
      </div>
    );
  }
}
