import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Hero/>
      </>
    </BrowserRouter>
  );
}

export default App;
