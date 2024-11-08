import UploadButton from "./UploadButton"

// Medical Exam Field
const MedicalExamField: React.FC = () => {
    return (
        <div >
            <label className="block mb-2 text-sm font-medium text-black " htmlFor="file_input">Medical Exam</label>
            <div id="file_input" aria-describedby="file_help">
                <UploadButton />
            </div>
            <p className="mt-1 text-sm text-gray-500 " id="file_help">PDF Only</p>
        </div>
    )
}

export default MedicalExamField
