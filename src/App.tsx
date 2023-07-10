import * as React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import BodyMain from "./components/Body/BodyMain";

export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <>
      <Navbar/>
      <BodyMain />
    </>
  );
}
