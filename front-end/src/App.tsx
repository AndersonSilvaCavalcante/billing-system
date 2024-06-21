import React from "react"
import { FileProvider } from "@/providers/file.provider"
import UploadFile from "@/components/file/upload-file"

const App: React.FC = () => {
    return (
        <div className="h-screen w-screen flex flex-col items-center pt-20 overflow-x-hidden">
            <div className="w-11/12 bg-gray-400 break-normal text-center space-y-8">
                <div className="text-3xl text-white font-semibold">
                    <h1>Vamos começar?</h1>
                    <h2>Envie sua <span className="text-green-400"> planilha</span></h2>
                    <p>e como mágica cobre seus clientes</p>
                </div>
                <div>
                    <FileProvider>
                        <UploadFile />
                    </FileProvider>
                </div>
            </div>
        </div>
    )
}

export default App