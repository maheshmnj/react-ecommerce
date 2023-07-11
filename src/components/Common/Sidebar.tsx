import React, { useState } from "react";

const Sidebar = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <div>
        <button onClick={() => setIsSidebarOpen(!props.isSidebarOpen)}>
          Close Sidebar
        </button>
      </div>
      {props.isSidebarOpen && (
        <div className={props.className}>Hello world!</div>
      )}
    </>
  );
};

export default Sidebar;
