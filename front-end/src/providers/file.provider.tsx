import { FileActionType, FileAction, FileContextState, FileProviderProps, FileDispatch } from "@/types";
import React, { useContext } from "react";

const initialFileState: FileContextState = {
    file: null,
    isLoading: false,
    fileList: []
}
const FileContext = React.createContext<FileContextState | undefined>(undefined);
const FileDispatchContext = React.createContext<FileDispatch | undefined>(undefined);

function fileReducer(state: FileContextState, action: FileAction): FileContextState {
    switch (action.type) {
        case FileActionType.SELECTED_FILE:
            return { ...state, file: action.payload?.file || null };
        case FileActionType.SENDING_FILE:
            return { ...state, isLoading: true };
        case FileActionType.FILE_UPLOADED_SUCCESSFULLY:
            return { ...state, file: null, isLoading: false };
        case FileActionType.FILE_UPLOAD_FAILED:
            return { ...state, isLoading: false }
        case FileActionType.CANCEL_FILE_UPLOAD:
            return { ...state, file: null };
        default:
            return state;
    }
}

function FileProvider({ children }: FileProviderProps) {
    const [state, dispatch] = React.useReducer(fileReducer, initialFileState);

    return (
        <FileContext.Provider value={state}>
            <FileDispatchContext.Provider value={dispatch}>
                {children}
            </FileDispatchContext.Provider>
        </FileContext.Provider>
    )
}

function useFile() {
    const context = useContext(FileContext);
    if (context === undefined) {
        throw new Error('useFile is being used outside of FileProvider! \nOnly use useFile when your component is encapsulated by FileProvider.');
    }
    return context;
}

function useFileDispatch() {
    const context = useContext(FileDispatchContext);
    if (context === undefined) {
        throw new Error('useFileDispatch is being used outside of FileProvider! \nOnly use useFileDispatch when your component is encapsulated by FileProvider.');
    }
    return context;
}

export {
    useFileDispatch,
    useFile,
    FileProvider
}