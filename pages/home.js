import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../components/Store/index";
import Header from "../Components/Header";

import "./style.css";
function home() {
  const router = useRouter();

  return (
    <div>
      <Header />
      <h1>Home</h1>
    </div>
  );
}

export default home;
