export const postImages = async (file) => {
  const URL = 'http://localhost:8081/api/file/upload';

  // Crear un objeto FormData y añadir el archivo
  const formData = new FormData();
  formData.append('file', file);

  try {
    const resp = await fetch(URL, {
      method: 'POST',
      body: formData,
    });

    if (!resp.ok) {
      throw new Error('No se pudo registrar el socio');
    }

    // Parsear el contenido JSON de la respuesta
    const respJson = await resp.json();

    // Obtener el valor del campo 'value' del objeto JSON
    const value = respJson.value;
    
    return value;
  } catch (error) {
    throw new Error(error.message);
  }
};