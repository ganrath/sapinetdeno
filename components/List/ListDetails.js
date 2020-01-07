import React, { useState, useContext } from "react";
import { StoreContext } from "../Store/index";
import List from "./list";
function ListDetails() {
  const state = useContext(StoreContext);
  return (
    <div className="list-parent">
      {state.sortResult.map(item => {
        return <List details={item} key={item.id} />;
      })}
    </div>
  );
}

export default ListDetails;
