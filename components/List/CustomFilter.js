import React, { useState, useContext } from "react";
import Checkbox from "./Checkbox";
function CustomFilter(props) {
  return (
    <div className="filter-head">
      <h2>{props.head}</h2>
      <ul>
        {props.checkbox.map((item, index) => {
          return (
            <li key={index}>
              <Checkbox details={item} name={props.head} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomFilter;
