export const postSocios = async (formData) => {
    const URL = 'http://localhost:8081/api/socio/create';

    try {
        const resp = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!resp.ok) {
            throw new Error('No se pudo registrar el socio');
        }

        return resp;
    } catch (error) {
        throw new Error(error.message);
    }
};