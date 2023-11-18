/* import { Input } from '@/components/GestionSociosComponent/Input'; */
import { useFormInput } from '@/hooks/useFormInput';
import { useState } from "react";
//React Icons
import { HiIdentification } from 'react-icons/hi2';
import { BsFillPersonFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';

/* //Componentes
import { MainButtonSocio } from '@/components/GestionSociosComponent/MainButtonSocio'; */

import { postSocios } from '@/helpers/postSocios';

import Swal, { SweetAlertOptions } from 'sweetalert2';

interface RegistroSocioProps {
  documentoIdentidad: string;
  nombre: string;
  correoElectronico: string;
  telefono: number;

  /* onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; */
}

const RegistroSocio = ({
  documentoIdentidad,
  nombre,
  correoElectronico,
  telefono,
}: RegistroSocioProps) => {
  const { onResetForm, onInputChange, formState } = useFormInput({
    nombre: '',
    correoElectronico: '',
    telefono: null,
    documentoIdentidad: '',
  });

  const [imageSelected, setImageSelected] = useState<string | null>(null);
  const [urlImage, setUrlImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false)

  const onsubmitForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    /* postSocios(formState); */
    // Configura la nube de Cloudinary
    const cloudName = 'dk1tsorel';
    const uploadPreset = 'qfekt1id';

    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', uploadPreset);

    try {
      // Realiza la carga de la imagen a Cloudinary
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      // Almacena la URL de la imagen en el estado
      setUrlImage(data.secure_url);
    } catch (error) {
      console.error('Error al cargar la imagen a Cloudinary:', error);
    } finally {
      setLoading(false);
    }
    onResetForm();
    /* Swal.fire({
      title: 'Socio registrado con éxito',
      text: 'Para visualizar los socios visite el listado de socios',
      icon: 'success',
    } as SweetAlertOptions); */
  };

  return (
    <div className='flex h-screen'>
      <div className='w-[35%] bg-[#F2F2F2]'>
        <img src='/images/ssmu.png' alt='registro' />
      </div>
      <form className='w-[65%]' onSubmit={onsubmitForm}>
        <div className='flex items-center justify-center bg-blue-socio p-10'>
          <h1 className='text-white text-center font-semibold text-4xl'>
            Registrar nuevo socio
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center mt-10 gap-3'>
          <div className='flex w-2/4 items-center'>
            <HiIdentification className='mr-3 text-3xl text-green-socio' />
            <input
              placeholder='Numero de cédula'
              name='documentoIdentidad'
              value={documentoIdentidad}
              onChange={onInputChange}
            />
          </div>
          <div className='flex w-2/4 items-center'>
            <BsFillPersonFill className='mr-3 text-3xl text-green-socio' />
            <input
              placeholder='Nombre'
              name='nombre'
              value={nombre}
              onChange={onInputChange}
            />
          </div>
          <div className='flex w-2/4 items-center'>
            <MdEmail className='mr-3 text-3xl text-green-socio' />
            <input
              placeholder='Correo'
              name='correoElectronico'
              value={correoElectronico}
              onChange={onInputChange}
            />
          </div>
          <div className='flex w-2/4 items-center'>
            <FaPhoneSquareAlt className='mr-3 text-3xl text-green-socio' />
            <input
              placeholder='Telefono'
              name='telefono'
              value={telefono}
              onChange={onInputChange}
            />
          </div>
          {/* <div className='mt-5'>
                        <MainButtonSocio name='Consultar Pasado Judicial' color='#6662D9' onClick={() => { }} />
                    </div> */}
          <div className='flex flex-wrap gap-4 mt-4'>
            <div className='flex items-center'>
              <strong className='text-xl'>Pasado Judicial</strong>
              <input type="file" onChange={(event)=> {
                setImageSelected(event.target.files[0]);
                }}
              />
              <BsFillPlusCircleFill className='ml-3 mr-4 text-3xl text-red-socio hover:scale-110' />
            </div>

            <div className='flex items-center'>
              <strong className='text-xl'>Licencia</strong>
              <BsFillPlusCircleFill className='ml-3 mr-4 text-3xl text-red-socio hover:scale-110' />
            </div>

            <div className='flex items-center'>
              <strong className='text-xl'>Foto</strong>
              <BsFillPlusCircleFill className='ml-3 text-3xl text-red-socio hover:scale-110' />
            </div>
          </div>

          <button
            className='mt-3 text-white text-md rounded-full px-4 py-2 font-semibold hover:scale-105 bg-blue-500'
            type='submit'
          >
            Registrar Socio
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistroSocio;
