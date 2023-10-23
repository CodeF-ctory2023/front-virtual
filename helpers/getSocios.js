export const getSocios = async() => {

    const url = 'https://demo5024142.mockable.io/socios';
    const resp = await fetch( url );
    const { socios } = await resp.json();

    return socios;
}