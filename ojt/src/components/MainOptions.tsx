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

export default MainOptions;