import { Drawer } from "@mui/material";
import React, { useState } from "react";
import "./common.css";
const Sidebar = (props) => {
  return (
    <>
      {props.isSidebarOpen && (
        <div className="drawer-content">
          <div>
            <button onClick={props.onSidebarClose}>
              Close Sidebar
            </button>
          </div>
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
