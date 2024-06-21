import { useFile, useFileDispatch } from "@/providers/file.provider"
import React from "react"
import { FileUploader } from "@/components/ui/file-uploader"
import { FileActionType } from "@/types"
import { sendFile } from "@/services/files-api"

const UploadFile: React.FC = () => {
    const { file } = useFile();
    const dispatch = useFileDispatch();

    function setFile(file: File | null) {
        dispatch({
            type: FileActionType.SELECTED_FILE,
            payload: { file: file }
        });
    }

    function unsetFile() {
        dispatch({
            type: FileActionType.CANCEL_FILE_UPLOAD
        });
    }

    async function uploadFile() {
        dispatch({ type: FileActionType.SENDING_FILE });

        if (file) {
            try {
                await sendFile(file);
                dispatch({ type: FileActionType.FILE_UPLOADED_SUCCESSFULLY });
            } catch (error) {
                console.error("Error sending file:", error);
                dispatch({ type: FileActionType.FILE_UPLOAD_FAILED });
            }
        }
    }

    return (
        <>
            <FileUploader file={file} setSelectedFile={setFile} sendSelectedFile={uploadFile} cleanSelectedFile={unsetFile} />
        </>
    )
}

export default UploadFile