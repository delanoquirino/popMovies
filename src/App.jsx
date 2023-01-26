import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
      <GlobalStyle />

      <Outlet />
    </>
  );
}

export default App;
