export const postSocios = async() => {
    const URL = 'localhost:8081/api/socio/find-all/';

    const formData = {

    };

    try {
 
        const resp = await fetch( URL, {
            method: 'POST',
            body: formData
        });


        if ( !resp.ok ) throw new Error('No se pudo registrar el socio')

        return resp;

    } catch (error) {
        throw new Error( error.message );
    }

}