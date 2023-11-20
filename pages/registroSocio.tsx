/* import { Input } from '@/components/GestionSociosComponent/Input'; */
import { useFormInput } from '@/hooks/useFormInput';
import { ChangeEvent, useState } from "react";
import { useRouter } from 'next/router';
//React Icons
import { HiIdentification } from 'react-icons/hi2';
import { BsFillPersonFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';

/* //Componentes
import { MainButtonSocio } from '@/components/GestionSociosComponent/MainButtonSocio'; */

import { postSocios } from '@/helpers/postSocios';
import { postImages } from '@/helpers/postImages';

interface RegistroSocioProps {
  documentoIdentidad: string;
  nombre: string;
  correoElectronico: string;
  telefono: number;
  pasadoJudicial: string;
  licenciaConducir: string;
  foto: string;
}
const initialState = {
  documentoIdentidad: "",
  nombre: "",
  correoElectronico: "",
  telefono: null,
  pasadoJudicial: "",
  licenciaConducir: "",
  foto: "",
};
const RegistroSocio = ({
  documentoIdentidad,
  nombre,
  correoElectronico,
  telefono,
  pasadoJudicial,
  licenciaConducir,
  foto,
}: RegistroSocioProps) => {
  const { onResetForm, onInputChange, formState, setFormState } = useFormInput(initialState);

  const router = useRouter();
  const onsubmitForm = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    try {
      const { name, value } = event.target;
      setFormState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
  
      // Luego, realiza la llamada a la función asincrónica
      await postSocios(formState);
  
      // Restablece el estado del formulario después de completar la operación asincrónica
      onResetForm();
      router.push('/tablaSocios');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>, fieldToUpdate: string) => {
    const file = e.target.files?.[0];
  
    // Verificar si hay un archivo seleccionado
    if (file) {
      try {
        const imageUrl = await postImages(file);
  
        // Actualizar el estado directamente con la URL de la imagen
        setFormState((prevState) => ({
          ...prevState,
          [fieldToUpdate]: imageUrl,
        }));
      } catch (error) {
        // Manejar el error
        console.error('Error al cargar la imagen:', error);
      }
    }
  };
  
  console.log(formState);

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
          <div className='gap-4 mt-4'>
            <div className='flex items-center mb-3'>
              <strong className='text-xl'>Pasado Judicial</strong>
              <input
                type="file"
                name='pasadoJudicial'
                value={pasadoJudicial}
                onChange={(e) => uploadImage(e, 'pasadoJudicialImg')}
              />
              <BsFillPlusCircleFill className='ml-3 mr-4 text-3xl text-red-socio hover:scale-110' />
            </div>

            <div className='flex items-center mb-3'>
              <strong className='text-xl'>Licencia</strong>
              <input
                type="file"
                name='licenciaConducir'
                value={licenciaConducir}
                onChange={(e) => uploadImage(e, 'licenciaConducir')}
              />
              <BsFillPlusCircleFill className='ml-3 mr-4 text-3xl text-red-socio hover:scale-110' />
            </div>

            <div className='flex items-center'>
              <strong className='text-xl'>Foto</strong>
              <input
                type="file"
                name='foto'
                value={foto}
                onChange={(e) => uploadImage(e, 'foto')}
              />
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
