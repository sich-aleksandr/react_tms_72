import React from "react";
import "./sort-todo.css";

export default class SortTodos extends React.Component {
  render() {
    const { props, onChange, value } = this.props;
    return (
      <div className="sort">
        {props.map(({ id, label, isChecked }) => {
          return (
            <div key={id} className="sort-radio">
              <input
                name="sort"
                type="radio"
                id={id}
                value={value}
                checked={isChecked}
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
