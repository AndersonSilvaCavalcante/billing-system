import { formatFileSize } from "@/lib/utils"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../ui"
import React from "react"
import { useFile } from "@/providers/file.provider";

const FileListTable: React.FC = () => {
    const { fileList } = useFile();
    
    if(fileList.length < 0 ){
        return <></>
    }

    return (
        <Table className="text-start">
            <TableHeader>
                <TableRow>
                    <TableHead>Ordem</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Tamanho</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {fileList.map((file: File, index: number) => {
                    return (
                        <TableRow key={file.name + index}>
                            <TableCell>#{index + 1}</TableCell>
                            <TableCell>{file.name}</TableCell>
                            <TableCell>{file.type}</TableCell>
                            <TableCell>{formatFileSize(file.size)}</TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

export default FileListTable