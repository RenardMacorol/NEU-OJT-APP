import { useNavigate } from "react-router-dom"

const MoaValidationButton: React.FC = () => {
    const navigate = useNavigate();
    return (
        <button className="p-5 hover:bg-gray-500 rounded-lg" onClick={() => navigate('/moaValidation')}>Moa Validation </button>
    )
}

export default MoaValidationButton
