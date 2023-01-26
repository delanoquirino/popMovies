import React from "react";
import { Outlet } from "react-router-dom";
import { NavB } from "./components/NavB";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
      <GlobalStyle />
      <NavB />
      <Outlet />
    </>
  );
}

export default App;
