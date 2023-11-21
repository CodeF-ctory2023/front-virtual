export const getSocioByCedula = async(cedula) => {

    const url = `http://localhost:8081/api/socio/filter-by-value/${cedula}`;
    const resp = await fetch( url );
    const socios = await resp.json();

    const newSocio = socios.map((socio) => ({
        documentoIdentidad: socio.documentoIdentidad,
        nombre: socio.nombre,
        correoElectronico: socio.correoElectronico,
        telefono: socio.telefono,
        pasadoJudicial: socio.pasadoJudicial,
        licenciaConducir: socio.licenciaConducir,
        foto: socio.foto,
      }));

    return newSocio;
}