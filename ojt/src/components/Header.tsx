import "../styles/App.css";
import React from "react";
import AppName from "./AppName";
import Logout from "./Logout";

const Header: React.FC = () => {
    return (
           <div className = 'header'>
                <AppName />
                <Logout />
           </div>
    )
}

export default Header;
