import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import BodyMain from "./components/Body/BodyMain";
import Sidebar from "./components/Common/Sidebar";

export default function App() {
  let [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    console.log("Toggle from AppBar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    console.log("Close from BodyMain");
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle} />
      <BodyMain
        isSidebarOpen={isSidebarOpen}
        onSidebarClose={handleSidebarClose}
      />
    </>
  );
}
