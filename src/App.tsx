import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header background="bg-black" color="text-white" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
