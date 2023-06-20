import * as React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { BeakerIcon } from '@heroicons/react/24/solid'
export default function Navbar(props: any) {
  return (
    <>

      <div className="frost navbar h-216">
        <ul className="navbar-menu">
          <li>
            <div>
              <BeakerIcon className="h-6 w-6 text-blue-500" />
            </div>
          </li>
        </ul>
        <div className="navbar-menu">
          <li>
            Home
          </li>
          <li>
            Home
          </li>
          <li>
            Home
          </li>
        </div>
      </div >
    </>
  );
}
