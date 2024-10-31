import { useNavigate } from "react-router-dom";
import "../services/Routes";
import "../styles/App.css"
const UploadReq: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="text-center font-bold">
            <h1>Upload Requirements</h1>
            <h2>Parent Consent</h2>
            <h2>Medical Exam</h2>
            <h2>Psychology Exam</h2>
            <h2>Resume</h2>
            <button className="" onClick={() => navigate('/moaValidation')}>Moa Validation </button>

        </div >
    )
}
export default UploadReq;

