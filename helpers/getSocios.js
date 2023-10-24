export const getSocios = async() => {

    const url = 'http://localhost:8081/api/socio/find-all';
    const resp = await fetch( url );
    const socios = await resp.json();

    return socios;
}