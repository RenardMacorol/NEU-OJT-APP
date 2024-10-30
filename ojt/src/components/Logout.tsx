import Routes from "../services/Routes";
import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    return (
            <button className="logout-button" onClick={() => navigate('/login')}>Logout</button>
    )
}

export default Logout;
