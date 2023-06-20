import * as React from "react";
import "./index.css";
import Navbar from "./components/Navbar";

export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
      <Navbar />
    </>
  );
}
