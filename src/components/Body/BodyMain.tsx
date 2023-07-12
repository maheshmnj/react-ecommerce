import React from "react";
import Sidebar from "../Common/Sidebar";
import TodoBody from "./TodoBody";
import "./body.css";
const BodyMain = (props: any) => {

  return (
    <div className="body-container">
      <Sidebar
        className={props.isSidebarOpen ? "sidebar-left" : ""}
        isSidebarOpen={props.isSidebarOpen}
        onSidebarClose={props.onSidebarClose}
      />
      <TodoBody />
      <Sidebar className="sidebar-right" />
    </div>
  );
};

export default BodyMain;
