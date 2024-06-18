// import { useState, useEffect } from "react";
// import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import Blue from "./components/Blue";
// import Red from "./components/Red";
// import Green from "./components/Green";
// import Home from "./components/Home";
import Nav from "./components/Nav";
import R from "./components/Routes";
import Foot from "./components/Footer";

function App() {
  return (
    <div id="container">
      {/* <h1>Hello React Router!</h1> */}
      <Nav />
      <R />
      <Foot />
    </div>
  );
}

export default App;
