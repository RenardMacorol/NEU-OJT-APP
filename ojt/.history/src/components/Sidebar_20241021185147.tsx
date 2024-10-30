import "../styles/App.css";
import "../services/Routes";
import AppName from "./AppName";
import React, {useState} from "react";

const Sidebar= () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSidebar = () =>{
        setIsVisible(!isVisible);
    }
    

    return (
        <div>
            <span className="menu-icon" onClick={toggleSidebar}>☰</span>
            <div className={`sidebar ${isVisible ? "visible" : "hidden"}`}>
            <AppName /> 
            <ul>
                <li><a href="/studentinput">Student Input</a></li>
                <li><a href="/uploadreq">Upload Requirements</a></li>
                <li><a href="/genendletter">Generate Endorsement Letter</a></li>
                <li><a href="/updatecompany">Update Company</a></li>
            </ul>
            </div>
        </div>
    )
}

export default Sidebar;