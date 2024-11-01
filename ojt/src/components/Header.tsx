import "../styles/App.css";
import React from "react";
import AppName from "./AppName";
import Logout from "./Logout";

const Header: React.FC = () => {
    return (
           <div className = 'flex justify-space-between items-center p-5 ml-10'>
                <AppName />
                <Logout />
           </div>
    )
}

export default Header;
