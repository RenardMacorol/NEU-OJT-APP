import { useState } from "react";
import { storage } from "../../services/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";

const UploadButton: React.FC = () => {
    const [fileUpload, setFileUpload] = useState<File | null>(null);

    const uploadFile = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            alert("You must be logged in to upload a file.");
            return;
        }

        if (!fileUpload) {
            alert("No file selected.");
            return;
        }

        const fileRef = ref(storage, `Resume/${fileUpload.name}`);

        const metadata = {
            customMetadata: {
                uid: user.uid
            }
        };

        try {
            await uploadBytes(fileRef, fileUpload, metadata);
            alert("Resume File Uploaded Successfully");
        } catch (error) {
            alert("File upload failed. Check console for details.");
        }
    };

    return (
        <div>
            <input
                type="file"
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
                accept="application/pdf"
                onChange={(event) => {
                    const file = event.target.files ? event.target.files[0] : null;
                    setFileUpload(file);
                }}
            />
            <button
                className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-lg"
                onClick={uploadFile}
            >
                Upload PDF
            </button>
        </div>
    );
};

export default UploadButton;
