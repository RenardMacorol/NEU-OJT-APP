import "../styles/App.css";
import "../services/Routes";
import React, {useState} from "react";

const Sidebar= () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSidebar = () =>{
        setIsVisible(!isVisible);
    }
    

    return (
        <div>
            <div className={`sidebar ${isVisible ? "visible" : "hidden"}`}> 
            <span className="menu-icon" onClick={toggleSidebar}>☰</span>
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