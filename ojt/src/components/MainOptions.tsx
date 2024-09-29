<<<<<<< HEAD
import "../Router/Routes";
import { useNavigate } from "react-router-dom";

const MainOptions: React.FC = () => {
    const navigate = useNavigate();

    return(
        <section className="options">
            <button className="option-button" onClick={() => navigate('/studentinput')}>Enter Student Input</button>
            <button className="option-button" onClick={() => navigate('/uploadreq')}>Upload Requirements</button>
            <button className="option-button" onClick={() => navigate('/genendletter')}>Generate Endorsement Letter</button>
            <button className="option-button" onClick={() => navigate('/updatecompany')}>Update Company</button>
        </section>
    )
}

=======
import "./App.css";
import React from "react";

const MainOptions = () => {
    return(
        <section className="options">
            <button className="option-button">Enter Student Input</button>
            <button className="option-button">Upload Requirements</button>
            <button className="option-button">Generate Endorsement Letter</button>
            <button className="option-button">Update Company</button>
        </section>
    )
}

>>>>>>> bcc75b04bee6bc2b1ae62791b3e8886049abdff5
export default MainOptions;