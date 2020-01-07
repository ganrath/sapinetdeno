import React from "react";
import { StoreProvider, StoreConsumer } from "../components/Store/index";

import Header from "../components/header";

import Filter from "../components/List/filter";
import ListDetails from "../components/List/listDetails";
import "../style.css";
const Home = () => (
  <div>
    <StoreProvider>
      <Header />
      <div className="layout-plz">
        <Filter />
        <ListDetails />
      </div>
    </StoreProvider>
  </div>
);

export default Home;
