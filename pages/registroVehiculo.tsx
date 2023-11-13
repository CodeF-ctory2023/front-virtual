/* import { Input } from '@/components/GestionVehiculosComponent/Input'; */
import { useFormInput } from '@/hooks/useFormInput';

// React Icons
import { MdLocalShipping } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { PiTrademark } from 'react-icons/pi';
import { IoLogoModelS } from 'react-icons/io';
import { BiSolidColor } from 'react-icons/bi';

/* // Componentes
import { MainButtonVehiculo } from '@/components/GestionVehiculosComponent/MainButtonVehiculo'; */

import { postSocios } from '@/helpers/postSocios';

import Swal, { SweetAlertOptions } from 'sweetalert2';

interface RegistroVehiculoProps {
    placa: string;
    marca: string;
    modelo: string;
    color: string;
}

const RegistroVehiculo = ({ placa, marca, modelo, color }: RegistroVehiculoProps) => {
    const { onResetForm, onInputChange, formState } = useFormInput({
        placa: '',
        marca: '',
        modelo: '',
        color: '',
    });

    const onsubmitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        postSocios(formState);
        onResetForm();
        Swal.fire({
            title: 'Vehículo registrado con éxito',
            text: 'Para visualizar los vehículos visite el listado de vehículos',
            icon: 'success',
        } as SweetAlertOptions);
    };

    return (
        <div className='flex h-screen'>
            <div className='w-[35%] bg-[#F2F2F2]'>
                <img src="/images/ssmu.png" alt="registro" />
            </div>
            <form className='w-[65%]' onSubmit={onsubmitForm}>
                <div className="flex items-center justify-center bg-blue-socio p-10">
                    <h1 className="text-white text-center font-semibold text-4xl">
                        Registrar nuevo vehículo
                    </h1>
                </div>
                <div className='flex flex-col items-center justify-center mt-10 gap-3'>
                    <div className='flex w-2/4 items-center'>
                        <MdLocalShipping className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Número de placa'
                            name='placa'
                            value={placa}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex w-2/4 items-center'>
                        <PiTrademark className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Marca'
                            name='marca'
                            value={marca}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex w-2/4 items-center'>
                        <IoLogoModelS className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Modelo'
                            name='modelo'
                            value={modelo}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex w-2/4 items-center'>
                        <BiSolidColor className="mr-3 text-3xl text-green-socio" />
                        <input
                            placeholder='Color'
                            name='color'
                            value={color}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className='flex flex-wrap gap-4 mt-4'>
                        <div className='flex items-center'>
                            <strong className='text-xl'>Seguro</strong>
                            <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                        </div>
                        <div className='flex items-center'>
                            <strong className='text-xl'>Mantenimiento</strong>
                            <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                        </div>
                        <div className='flex items-center'>
                            <strong className='text-xl'>Imagen</strong>
                            <BsFillPlusCircleFill className="ml-3 text-3xl text-red-socio hover:scale-110" />
                        </div>
                    </div>
                    <button
                        className="mt-3 text-white text-md rounded-full px-4 py-2 font-semibold hover:scale-105 bg-blue-500"
                        type="submit"
                    >
                        Registrar Vehículo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default RegistroVehiculo;