import React, { useState, ChangeEvent } from 'react';
import { Image } from 'cloudinary-react';

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setLoading(true);

    // Configura la nube de Cloudinary
    const cloudName = 'tu-nombre-de-nube';
    const uploadPreset = 'tu-preset-de-subida';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      // Realiza la carga de la imagen a Cloudinary
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      // Almacena la URL de la imagen en el estado
      setImage(data.secure_url);
    } catch (error) {
      console.error('Error al cargar la imagen a Cloudinary:', error);
    }
  };
};