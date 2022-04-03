import React from "react";
import "./sort-todo.css";

const SortTodos = ({ props }) => {
  return (
    <div className="sort">
      {props.map(({id, label, isChecked}) => {
        return (
          <div key={id} className='sort-radio'>
            <input
              name="sort"
              type="radio"
              id={id}
              value={id}
              checked={isChecked}
              onChange={()=>{}}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default SortTodos;
