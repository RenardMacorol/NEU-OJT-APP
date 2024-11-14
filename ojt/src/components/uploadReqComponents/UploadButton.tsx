import { useState } from "react";
import { storage, db } from "../../services/firebase";
import { doc, onSnapshot, setDoc, snapshotEqual, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { error } from "console";

//upload Button
const UploadButton: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [downloadURL, setDownloadURL] = useState<string | null>(null);
    const [isUploaded, setUploaded] = useState<boolean | null>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }

    };

    const handleClickUpload = () => {
        if (file) {
            const storageRef = ref(storage, `Resume/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            const userAuth = getAuth();
            const userInfo = userAuth.currentUser;

            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setUploadProgress(progress);
                    console.log(progress);
                },
                (error) => {
                    console.error("Error " + error);
                },
                async () => {
                    try {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        setDownloadURL(downloadURL);
                        if (userInfo?.uid != null) {



                            const docRef = doc(db, "user", userInfo?.uid)
                            await updateDoc(docRef, {
                                fileName: file.name,
                                fileType: "resume",
                                uploadedAt: new Date(),
                            });
                            console.log("Saved data succss");

                        }
                    } catch (err) {
                        console.log("Error", err);
                    }
                }
            )


        }
    }


    return (
        <div>
            <input type="file" className="block w-full text-sm text-gray-900 border border-gray-300
            rounded-lg cursor-pointer focus:outline-none" onChange={handleFileChange} />
            <button onClick={handleClickUpload} className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2.5 me-2 mb-2 mt-3" >Submit</button >

            {uploadProgress !== null &&
                (

                    <div>
                        <p>Upload Progress {Math.round(uploadProgress)}%</p>
                    </div>
                )
            }
            {downloadURL && (
                <p>File Uploaded check and download here <a href={downloadURL}></a></p>
            )

            }
        </div>

    )
}

export default UploadButton;
