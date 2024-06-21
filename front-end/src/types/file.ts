import { ReactNode } from "react";

export enum FileActionType {
  SELECTED_FILE = "SELECTED_FILE",
  SENDING_FILE = "SENDING_FILE",
  FILE_UPLOADED_SUCCESSFULLY = "FILE_UPLOADED_SUCCESSFULLY",
  FILE_UPLOAD_FAILED = "FILE_UPLOAD_FAILED",
  CANCEL_FILE_UPLOAD = "CANCEL_FILE_UPLOAD"
}

type ReducerAction<T, P> = {
  type: T;
  payload?: Partial<P>;
};

type FileContextState = {
  isLoading: boolean;
  file: File | null;
  fileList: Array<File>; // & {} You can add more information about the challenge inside this type
};

type FileAction = ReducerAction<
  FileActionType,
  Partial<FileContextState>
>;

type FileDispatch = ({ type, payload }: FileAction) => void;

type FileContextType = {
  state: FileContextState;
  dispatch: FileDispatch;
};

type FileProviderProps = { children: ReactNode };

export type {
  FileContextState,
  FileAction,
  FileDispatch,
  FileContextType,
  FileProviderProps,
}
