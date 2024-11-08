import UploadButton from "./UploadButton"

const ParentConsentField: React.FC = () => {
    return (
        <div className="">
            <label className="block mb-2 text-sm font-medium text-black " htmlFor="file_input">Parent Consent</label>
            <div id="file_input" aria-describedby="file_help">
                <UploadButton />
            </div>
            <p className="mt-1 text-sm text-gray-500 " id="file_help">PDF Only</p>
        </div>
    )
}

export default ParentConsentField
