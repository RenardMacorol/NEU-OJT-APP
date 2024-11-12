import ResumeButton from "./ResumeButton"

//Resume Field
const ResumeField: React.FC = () => {
    return (
        <div >
            <label className="block mb-2 text-sm font-medium text-black " htmlFor="file_input">Resume</label>
            <div id="file_input" aria-describedby="file_help">
                <ResumeButton />
            </div>
            <p className="mt-1 text-sm text-gray-500 " id="file_help">PDF Only</p>
        </div>
    )
}

export default ResumeField
