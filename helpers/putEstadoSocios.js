export const updateSocioStatus = async (id, nuevoEstado) => {
    const URL = `http://localhost:8081/api/administrador/change-socio-status?id=${id}&status=${nuevoEstado}`;
  
    try {
      const resp = await fetch(URL, {
        method: 'PUT',
      });
  
      if (!resp.ok) {
        throw new Error('No se pudo actualizar el estado del socio');
      }
  
      return resp;
    } catch (error) {
      throw new Error(error.message);
    }
  };