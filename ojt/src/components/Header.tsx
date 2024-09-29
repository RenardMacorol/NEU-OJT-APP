<<<<<<< HEAD
import "./App.css";
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

=======
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

>>>>>>> bcc75b04bee6bc2b1ae62791b3e8886049abdff5
export default Header;