import "./App.css";
import React from "react";
import AppName from "./AppName";
import Logout from "./Logout";

const Header = () => {
    return (
           <div className = 'header'>
                <AppName />
                <Logout />
           </div>
    )
}

export default Header;