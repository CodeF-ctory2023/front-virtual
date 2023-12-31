import { HiIdentification } from 'react-icons/hi2';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { ButtonSocios } from '@/components/GestionSociosComponent/ButtonSocios';
import { Dialog } from '@/components/GestionSociosComponent/dialog';
import { VentEmergente } from '@/components/GestionSociosComponent/ventEmergente';
import { useModal } from '@/hooks/useModal';
import { VerticalNavbar } from '@/components/GestionSociosComponent/NavBar';
import { useUser } from '@/context/UserContext';

const NombreSocio: React.FC = () => {

  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(false); 
  const { user, setUser } = useUser();
  const {
    documentoIdentidad,
    nombre,
    correoElectronico,
    telefono,
    licenciaConducir,
    pasadoJudicial,
    foto
  } = user[0];
  console.log(user);
  return (
    <>
    <VerticalNavbar />
    <div className='bg-[#F2F2F2]'>
      <div className='flex items-center justify-center bg-blue-socio p-4 rounded-sm'>
        <h1 className='text-[35px] text-white text-center font-semibold'>
          Nombre de Socio
        </h1>
      </div>
      <div className='p-4 '>
        <div className='flex flex-row justify-around'>
          <div>
            <div>
              <img
                src='/images/image.png'
                alt='registro'
                className='w-[300px] px-25'
              />
            </div>
            <div>
              <Dialog dialogo='Licencia de conducir' />
            </div>
            <div>
              <Dialog dialogo='Pasado Judicial' />
            </div>
          </div>
          <div className='flex flex-col mt-8 gap-3 '>
            <div className='flex w-[160%]'>
              <HiIdentification className='mr-3 text-3xl text-green-socio' />
              <div className='relative w-[110%]'>
                <input
                  type='text'
                  id='cedula'
                  className='border-solid border-2 border-neutral-200'
                  disabled={true}
                  value={documentoIdentidad}
                />
                <label
                  htmlFor='cedula'
                  className='absolute top-0 left-2 -mt-2 text-black-600 px-1 '
                >
                  Cédula
                </label>
                {/* <p>{newSocios}</p> */}
              </div>
            </div>
            <div className='flex w-[160%]'>
              <BsFillPersonFill className='mr-3 text-3xl text-green-socio' />
              <div className='relative w-[110%]'>
                <input
                  type='text'
                  id='name'
                  className='border-solid border-2 border-neutral-200'
                  disabled={true}
                  value={nombre}
                />
                <label
                  htmlFor='name'
                  className='absolute top-0 left-2 -mt-2 text-black-600 px-1 '
                >
                  Nombre
                </label>
                {/* <p>{newSocios.nombre}</p> */}
              </div>
            </div>
            <div className='flex w-[160%]'>
              <MdEmail className='mr-3 text-3xl text-green-socio' />
              <div className='relative w-[110%]'>
                <input
                  type='text'
                  id='correo'
                  className='border-solid border-2 border-neutral-200'
                  disabled={true}
                  value={correoElectronico}
                />
                <label
                  htmlFor='correo'
                  className='absolute top-0 left-2 -mt-2 text-black-600 px-1 '
                >
                  Correo electrónico
                </label>
                {/* <p>{newSocios.correo}</p> */}
              </div>
            </div>
            <div className='flex w-[160%]'>
              <FaPhoneSquareAlt className='mr-3 text-3xl text-green-socio' />
              <div className='relative w-[110%]'>
                <input
                  type='text'
                  id='telefono'
                  className='border-solid border-2 border-neutral-200'
                  disabled={true}
                  value={telefono}
                />
                <label
                  htmlFor='telefono'
                  className='absolute top-0 left-2 -mt-2 text-black-600 px-1 '
                >
                  Teléfono
                </label>
                {/* <p>{newSocios.telefono}</p> */}
              </div>
            </div>
            <div className="mt-20 p-2 pr-20 flex flex-row-reverse">
            <div className="px-5">
                <ButtonSocios color='#F39A9E' onClick={openModal1}>
                  <span>Rechazar</span>
                </ButtonSocios>
                <VentEmergente isOpen={isOpenModal1} closeModal={closeModal1}>
                  <p className='mb-4 text-center'>La solicitud ha sido rechazada exitosamente</p>
                  <form>
                     <input type="text" placeholder='Motivo de rechazo (opcional)' className="border-solid border-2 border-neutral-200"/>
                     <button className='border-solid bg-green-socio rounded ml-2 p-1'>Enviar</button>
                  </form>
                </VentEmergente>
              </div>
              <div className="px-5">
                <ButtonSocios color='#ABD08D' onClick={openModal2}>
                  <span>Aceptar</span>
                </ButtonSocios>
                <VentEmergente isOpen={isOpenModal2} closeModal={closeModal2}>
                  <p className='mb-4 text-center'>La solicitud ha sido aceptada exitosamente</p>
                </VentEmergente>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default NombreSocio;
