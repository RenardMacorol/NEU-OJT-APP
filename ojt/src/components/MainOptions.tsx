import "../services/Routes";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

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

export default MainOptions;
