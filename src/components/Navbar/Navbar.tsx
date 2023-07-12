import * as React from "react";
import "../Navbar/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import { BeakerIcon } from "@heroicons/react/24/solid";
import IconButton from "@mui/material/IconButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(props: any) {
  return (
    <>
      <div className="frost navbar">
        <div className="navbar-menu">
          {/* hamburger icon */}
          <IconButton aria-label="Example"
            onClick={props.onSidebarToggle}>
            <FontAwesomeIcon icon={faBars} />
          </IconButton>
          <li>
            {/* <BeakerIcon className="h-6 w-6 text-blue-500" /> */}
            <Logo title="Todoist" />
          </li>
        </div>
        <div className="navbar-menu">
          {/* <li>
            Home
          </li>
          <li>
            Home
          </li> */}
          <li>Home</li>
        </div>
      </div>
    </>
  );
}
const Logo = (props: any) => {
  return <h3 className="logo">{props.title}</h3>;
};
