export const getSocios = async() => {

    const url = 'localhost:8081/api/socio/find-all/';
    const resp = await fetch( url );
    const { data } = await resp.json();

    const socios = data.map( socio => ({
        id: socio.id,
        nombre: socio.nombre,
        correo: socio.correo,
    }));
    
    return socios;
}