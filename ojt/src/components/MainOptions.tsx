import "../services/Routes";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";
import { useState } from "react";

const MainOptions: React.FC = () => {
    const [generate, setGenerate] = useState<string | boolean | null>(null);
    const navigate = useNavigate();

    const handleGenerate = () => {
        setGenerate("Dowloading")
    }

    return (
        <section className="options flex flex-row flex-wrap max-w-xl justify-center justify-self-center">
            <button className="option-button" onClick={() => navigate('/uploadreq')}>Upload Requirements</button>
            <button className="option-button" onClick={handleGenerate}>Generate Endorsement Letter</button>
            {generate ? <p className="">{generate}</p> : <p></p>}
            <button className="option-button" onClick={() => navigate('/studentInfo')}>Enter Student Input</button>
            <button className="option-button" onClick={() => navigate('/updatecompany')}>Update Company</button>
        </section>
    )
}

export default MainOptions;
