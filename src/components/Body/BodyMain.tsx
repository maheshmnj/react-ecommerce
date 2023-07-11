import React from 'react'
import Sidebar from '../Common/Sidebar'
import TodoBody from './TodoBody'
import "./body.css";
const BodyMain = (props: any) => {
    
function handleClick() {
    console.log("Button clicked");
  }
    return <div className="body-container">
        <Sidebar className="sidebar-left" />
        <TodoBody />
        <Sidebar className="sidebar-right" />
    </div>

}

export default BodyMain;