/* import { Input } from '@/components/GestionVehiculosComponent/Input'; */
import { useFormInput } from '@/hooks/useFormInput';

// React Icons
import { IoLogoModelS } from 'react-icons/io';
import { PiTrademarkBold } from 'react-icons/pi';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { MdReduceCapacity, MdLuggage, MdPets } from 'react-icons/md';

/* // Componentes
import { MainButtonVehiculo } from '@/components/GestionVehiculosComponent/MainButtonVehiculo'; */
import { VerticalNavbar } from '@/components/GestionSociosComponent/NavBar';
import { postSocios } from '@/helpers/postSocios';

import Swal, { SweetAlertOptions } from 'sweetalert2';

interface RegistroVehiculoProps {
    marca: string;
    modelo: string;
    capacidad: string;
    equipaje: string;
    mascotas: string;
}

const RegistroVehiculo = ({ marca, modelo, capacidad, equipaje, mascotas }: RegistroVehiculoProps) => {
    const { onResetForm, onInputChange, formState } = useFormInput({
        marca: '',
        modelo: '',
        capacidad: '',
        equipaje: '',
        mascotas: '',
    });

    const onsubmitForm = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        postSocios(formState);
        onResetForm();
        Swal.fire({
            title: 'Para completar el registro ingrese la contraseña',
            text: 'Para visualizar los vehículos visite el listado de vehículos',
            icon: 'success',
        } as SweetAlertOptions);
    };

    return (
        <>
            <VerticalNavbar />
            <div className='flex h-screen'>
                <div className='w-[35%] bg-[#F2F2F2]'>
                    <img src="/images/vehiculo.png" alt="registro" />
                </div>
                <form className='w-[65%]' onSubmit={onsubmitForm}>
                    <div className="flex items-center justify-center bg-blue-socio p-10">
                        <h1 className="text-white text-center font-semibold text-4xl">
                            Registrar nuevo vehículo
                        </h1>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-10 gap-3'>
                        <div className='flex w-2/4 items-center'>
                            <IoLogoModelS className="mr-3 text-3xl text-green-socio" />
                            <input
                                placeholder='Marca'
                                name='marca'
                                value={marca}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='flex w-2/4 items-center'>
                            <PiTrademarkBold className="mr-3 text-3xl text-green-socio" />
                            <input
                                placeholder='Modelo'
                                name='modelo'
                                value={modelo}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='flex w-2/4 items-center'>
                            <MdReduceCapacity className="mr-3 text-3xl text-green-socio" />
                            <input
                                placeholder='Capacidad de pasajeros'
                                name='capacidad'
                                value={capacidad}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='flex w-2/4 items-center'>
                            <MdLuggage className="mr-3 text-3xl text-green-socio" />
                            <input
                                placeholder='Cantidad de equipaje permitido'
                                name='equipaje'
                                value={equipaje}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='flex w-2/4 items-center'>
                            <MdPets className="mr-3 text-3xl text-green-socio" />
                            <input
                                placeholder='Si/No Habilitado para mascotas'
                                name='mascotas'
                                value={mascotas}
                                onChange={onInputChange}
                            />
                        </div>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            <div className='flex items-center'>
                                <strong className='text-xl'>Matrícula</strong>
                                <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                            </div>
                            <div className='flex items-center'>
                                <strong className='text-xl'>Soat</strong>
                                <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                            </div>
                            <div className='flex items-center'>
                                <strong className='text-xl'>Tecnomecánica</strong>
                                <BsFillPlusCircleFill className="ml-3 mr-4 text-3xl text-red-socio hover:scale-110" />
                            </div>
                            <div className='flex items-center'>
                                <strong className='text-xl'>Foto/Video</strong>
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
        </>
    )
}

export default RegistroVehiculo;