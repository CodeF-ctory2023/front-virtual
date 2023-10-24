/* import { Input } from '@/components/GestionSociosComponent/Input'; */
import { useFormInput } from '@/hooks/useFormInput';

//React Icons
import { HiIdentification } from 'react-icons/hi2';
import { BsFillPersonFill, BsFillPlusCircleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt } from 'react-icons/fa';

//Componentes
import { MainButtonSocio } from '@/components/GestionSociosComponent/MainButtonSocio';

import { postSocios } from '@/helpers/postSocios';

interface RegistroSocioProps {
    documentoIdentidad: string;
    nombre: string;
    correoElectronico: string;
    telefono: number;

    /* onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; */
}

const RegistroSocio = ({ documentoIdentidad, nombre, correoElectronico, telefono }: RegistroSocioProps) => {
    const { onResetForm, onInputChange, formState } = useFormInput({
        nombre: '',
        correoElectronico: '',
        telefono: null,
        documentoIdentidad: '',
    });

    const onsubmitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        postSocios(formState);
        onResetForm();
    };

    return (
        <div className='flex h-screen'>
            <div className='w-[35%] bg-[#F2F2F2]'>
                <img src="/images/ssmu.png" alt="registro" />
            </div>
            <form className='w-[65%]' onSubmit={onsubmitForm}>
                <div className="flex items-center justify-center bg-blue-socio p-10">
                    <h1 className="text-white text-center font-semibold text-4xl">
                        Registrar nuevo socio
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center mt-10 gap-3'>

                    <div className='flex w-2/4 items-center'>
                        <HiIdentification className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Numero de cédula'
                            name='documentoIdentidad'
                            value={documentoIdentidad}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex w-2/4 items-center'>
                        <BsFillPersonFill className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Nombre'
                            name='nombre'
                            value={nombre}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex w-2/4 items-center'>
                        <MdEmail className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Correo'
                            name='correoElectronico'
                            value={correoElectronico}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex w-2/4 items-center'>
                        <FaPhoneSquareAlt className="mr-3 text-3xl text-green-socio" />
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
                            <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                        </div>

                        <div className='flex items-center'>
                            <strong className='text-xl'>Licencia</strong>
                            <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                        </div>

                        <div className='flex items-center'>
                            <strong className='text-xl'>Foto</strong>
                            <BsFillPlusCircleFill className="ml-3 text-3xl text-red-socio hover:scale-110" />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <MainButtonSocio name='Registrar' color='#6662D9' onClick={() => { }} />
                    </div>

                </div>

            </form>
        </div>
    )
}

export default RegistroSocio;