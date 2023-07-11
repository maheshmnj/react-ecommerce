import React, { useState } from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import BodyMain from "./components/Body/BodyMain";
import Sidebar from "./components/Common/Sidebar";

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    console.log("Toggle from AppBar");
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Navbar onSidebarToggle={handleSidebarToggle} />
      <BodyMain
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
      />
      {/* <Sidebar
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebarToggle}
      /> */}
    </>
  );
}
