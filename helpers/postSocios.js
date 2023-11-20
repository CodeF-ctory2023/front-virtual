import Swal from 'sweetalert2';


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

        if (resp.ok) {
            Swal.fire({
                title: 'Socio registrado con éxito',
                text: 'Para visualizar los socios visite el listado de socios',
                icon: 'success',
              });
        }

        if (!resp.ok) {
            Swal.fire({
                title: 'No se pudo registrar el socio',
                text: 'Por favor valide los campos',
                icon: 'error',
              });
            throw new Error('No se pudo registrar el socio');
        }

        return resp;
    } catch (error) {
        throw new Error(error.message);
    }
};