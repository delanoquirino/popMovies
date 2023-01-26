import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar/index";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
      <NavBar />
      <GlobalStyle />
      <Outlet />
    </>
  );
}

export default App;
