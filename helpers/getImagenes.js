import fs from 'fs';
import path from 'path';

export const getImagenes = async (image) => {
  const apiUrl = `http://localhost:8081/api/file/download?key=${image}`;
  const localFilePath = path.join(process.cwd(), 'public', 'jmmotores-logo.jpg');

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Error al descargar el archivo. Código de respuesta: ${response.status}`);
    }

    const blob = await response.blob();

    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'jmmotores-logo.jpg';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);

    console.log('Archivo descargado exitosamente.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}
