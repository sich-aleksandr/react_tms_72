import React from "react";
import "./sort-todo.css";

const SortTodos = ({ props, onChange, value:groupVallue }) => {
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

export default SortTodos;
