async function getAllShifts() {
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:3hq0jxVr/turnos';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

async function postShift(name, lastName, documentType, documentNumber) {
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:3hq0jxVr/turnos';

    const postData = {
        nombre: name,
        apellido: lastName,
        tipo_documento: documentType,
        numero_documento: documentNumber
    }

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

async function getCurrentShift() {
    // URL de la API a la que se enviarán los datos
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:3hq0jxVr/turno_actual';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

async function nextShift() {
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:3hq0jxVr/turno_siguiente';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

async function previousShift() {
    const apiUrl = 'https://x8ki-letl-twmt.n7.xano.io/api:3hq0jxVr/turno_anterior';

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}

module.exports = {getAllShifts, getCurrentShift, postShift, nextShift, previousShift};