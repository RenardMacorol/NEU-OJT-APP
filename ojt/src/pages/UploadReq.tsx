import "../services/Routes";
import "../styles/App.css"
import ResumeField from "../components/uploadReqComponents/ResumeField";
import ParentConsentField from "../components/uploadReqComponents/ParentConsentField";
import MedicalExamField from "../components/uploadReqComponents/MedicalExamField";
import PsychologyExamField from "../components/uploadReqComponents/PsychologyExamField";
import MoaValidationButton from "../components/uploadReqComponents/MoaValidationButton";
const UploadReq: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-teal-500 to-blue-900 ">
            <div className="w-5/6 max-w-90 bg-gray-100 rounded-lg shadow-lg p-2 space-y-4">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900">Upload Requirements</h1>
                <form className="space-y-4">
                    <ResumeField />
                    <MedicalExamField />
                    <ParentConsentField />
                    <PsychologyExamField />
                </form>

                <MoaValidationButton />
            </div>
        </div >
    )
}
export default UploadReq;

