import React, { useState, useContext } from "react";
import TextDetails from "./textDetails";
function List(props) {
  const findYears = date => {
    var present = new Date();
    var past = new Date(date);
    let diff = present.getFullYear() - past.getFullYear();
    return diff;
  };
  return (
    <div className="List-cont">
      <div className="img-container">
        <img src={props.details.image} />
        <div className="text-overlay">
          <h2>{props.details.name}</h2>
          <p>
            id - {props.details.id} - created {findYears(props.details.created)}{" "}
            years ago
          </p>
        </div>
      </div>
      <TextDetails lefthead="Status" righthead={props.details.status} />
      <TextDetails lefthead="Species" righthead={props.details.species} />
      <TextDetails lefthead="Gender" righthead={props.details.gender} />
      <TextDetails lefthead="ORIGIN" righthead={props.details.origin.name} />
      <TextDetails
        lefthead="Last Location"
        righthead={props.details.location.name}
      />
    </div>
  );
}

export default List;
