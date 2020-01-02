import React, { useState, useContext } from "react";
import CustomFilter from "./customFilter";

function Filter() {
  let filterCheck = ["Human", "Mytholog", "Other Species"],
    genderCheck = ["Male", "Female"],
    speciesCheck = [
      "unknown",
      "Post-Apocalyptic Earth",
      "Nuptia 4",
      "Other origins"
    ];
  return (
    <div>
      <h1>Filter</h1>
      <CustomFilter head="Species" checkbox={filterCheck} />
      <CustomFilter head="Gender" checkbox={genderCheck} />
      <CustomFilter head="Origin" checkbox={speciesCheck} />
    </div>
  );
}

export default Filter;
