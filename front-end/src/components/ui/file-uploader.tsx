import React from "react"

type FileUploaderProps = {
  file: File | null;
  setSelectedFile: (file: File | null) => void;
  sendSelectedFile: () => void;
  cleanSelectedFile: () => void;
}

const FileUploader = ({ file, setSelectedFile, sendSelectedFile, cleanSelectedFile }: FileUploaderProps) => {

  function changeSelectedFile(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0] || null;
    setSelectedFile(selectedFile)
  }

  return (
    <div className="flex flex-col gap-6 items-center">
      <div>
        <label htmlFor="file" className="rounded-lg bg-green-600 text-white px-4 py-2 border-none font-semibold">
          Escolher arquivo
        </label>
        <input id="file" type="file" onChange={changeSelectedFile} className="hidden" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,text/csv" />
      </div>
      {file && (
        <section>
          <p className="pb-6">Detalhes do arquivo a ser enviado</p>
          <ul className="text-start">
            <li>Nome: {file.name}</li>
            <li>Tipo: {file.type}</li>
            <li>Tamanho: {file.size} bytes</li>
          </ul>
          <div className="space-x-4 pt-6">
            <button onClick={sendSelectedFile} className="rounded-lg bg-green-600 text-white px-4 py-2 border-none font-semibold">Fazer envio</button>
            <button onClick={cleanSelectedFile} className="rounded-lg bg-red-600 text-white px-4 py-2 border-none font-semibold">Cancelar</button>
          </div>
        </section>
      )}
    </div>
  );
};

export { FileUploader };
