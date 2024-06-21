const fileApi = "http://localhost:3000"

function sendFile(file: File) {
    const body = new FormData();
    body.append("file", file);

    return fetch(`${fileApi}/sendFile`, {
        method: 'POST',
        body: body
    }).then(response => {
        if (!response.ok) {
            throw new Error(`Something went wrong with the service, reponse status: ${response.status}`);
        }
        return response.ok
    }).catch(error => {
        throw new Error(`Errors were found when submitting. ${error}`);
    });
}

export { sendFile }