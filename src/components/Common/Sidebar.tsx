import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./common.css";
import ArrowBackIosIcon from '@mui/material/IconButton/';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChevronLeft, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const MenuTitle = (props: any) => {
  return (
    <div className="listtile row" onClick={props.onMenuClick}>
      <div className="menu-icon">
        <FontAwesomeIcon icon={props.icon} />
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
        <div className="drawer">
          <div className="drawer-header">
            <IconButton aria-label="Example"
              onClick={props.onSidebarClose}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>
          </div>
          <div className="drawer-content">
            <MenuTitle title="Menu" icon={faChevronLeft} onMenuClick={() => console.log("clicked")} />
            <MenuTitle title="Menu" />
            <MenuTitle title="Menu" />
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
