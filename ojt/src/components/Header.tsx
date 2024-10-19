import "./App.css";
import React from "react";
import AppName from "./AppName";
import Logout from "./Logout";

const Header: React.FC = () => {
    return (
           <header>
                <AppName />
                <Logout />
           </header>
    )
}

export default Header;
