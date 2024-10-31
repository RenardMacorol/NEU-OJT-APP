import React from "react";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
    const navigate = useNavigate();

    return (
        <button className="logout-button text-white hover:text-black hover:bg-gray-300 px-2 rounded-lg ml-auto" onClick={() => navigate('/login')}>Logout</button>
    )
}

export default Logout;
