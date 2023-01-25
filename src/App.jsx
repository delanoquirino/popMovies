import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;