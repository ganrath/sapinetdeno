import React, { useState, useContext } from "react";

function TextDetails(props) {
  return (
    <div className="text-cont">
      <p>{props.lefthead}</p>
      <p>{props.righthead}</p>
    </div>
  );
}

export default TextDetails;
