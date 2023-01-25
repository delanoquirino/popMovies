import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
