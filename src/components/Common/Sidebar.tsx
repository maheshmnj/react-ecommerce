import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./common.css";
import ArrowBackIosIcon from '@mui/material/IconButton/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const MenuTitle = (props: any) => {
  return (
    <div className="list-title" onClick={props.onMenuClick}>
      <div className="menu-icon">
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="list-title-title">
        <h3>{props.title}</h3>
      </div>
    </div>
  );

};


const Sidebar = (props) => {
  return (
    <>
      {props.isSidebarOpen && (
        <div className="drawer-content">
          <div>
            <IconButton aria-label="Example"
              onClick={props.onSidebarClose}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>
          </div>
          <ul>
            <MenuTitle title="Menu" onMenuClick={() => console.log("clicked")} />
            <MenuTitle title="Menu" />
            <MenuTitle title="Menu" />
          </ul>
        </div>
      )}
    </>
  );
}

export default Sidebar;
