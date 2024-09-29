<<<<<<< HEAD
import Routes from "../Router/Routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    return (
            <button className="logout-button" onClick={() => navigate('/login')}>Logout</button>
    )
}

=======
import "./App.css";
import React from "react";

const Logout = () => {
    return (
            <button className="logout-button">Logout</button>
    )
}

>>>>>>> bcc75b04bee6bc2b1ae62791b3e8886049abdff5
export default Logout;