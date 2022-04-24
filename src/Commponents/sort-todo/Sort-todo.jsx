import React from "react";
import "./sort-todo.css";

export default class SortTodos extends React.Component {
  render() {
    const { props, onChange, value:groupVallue } = this.props;
    return (
      <div className="sort">
        {props.map(({ id, value, label }) => {
          return (
            <div key={id} className="sort-radio">
              <input
                name="sort"
                type="radio"
                id={id}
                value={value}
                checked={value === groupVallue}
                onChange={onChange}
              />
              <label htmlFor={id}>{label}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
