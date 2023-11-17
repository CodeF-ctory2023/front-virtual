import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaUserTie, FaCar, FaRegUserCircle, FaHandHoldingUsd, FaHome, FaUser } from 'react-icons/fa';
import { TbMessage2Question, TbSteeringWheel } from 'react-icons/tb';
import { ImTree } from 'react-icons/im';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { AiOutlineAudit } from 'react-icons/ai';
import Link from 'next/link';

const VerticalNavbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown = () => {
        setIsOpen1(!isOpen1);
    };

    return (
        <div className={`bg-gray-100 border-2 border-black rounded-r-lg bordeh-screen w-${isOpen ? '25' : '8'} fixed top-0 left-0 transition-all duration-300`}>
            {/* Icono para desplegar/cerrar el navbar */}
            <div className="p-2">
                <button onClick={toggleNavbar} className="focus:outline-none">
                    {isOpen ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />}
                </button>
            </div>

            {/* Contenido del navbar desplegable */}
            {isOpen && (
                <div className="h-full">
                    <ul className="mt-0 divide-y divide-gray-200">
                        <li className="my-1.5 hover:bg-violet-200" >
                            <Link href="/" className="p-1 block">
                                <div className='flex'>
                                    <FaHome className='mr-3 text-3xl text-blue-socio' />
                                    <p>Inicio</p>
                                </div>
                            </Link>
                        </li>
                        <li className="my-1.5">
                            <div className='relative'>
                                <div className='flex hover:bg-violet-200 py-1'>
                                    <FaUserTie className='mr-3 text-3xl text-blue-socio' />
                                    <button onClick={toggleDropdown} className="p-1 block focus:outline-none flex">
                                        <p>Gestión de Socios</p>
                                    </button>
                                </div>
                                {isOpen1 && (
                                    <div className="relative top-0 right-0 mt-2 bg-gray-100 p-1 pl-4">
                                        <Link href="/registroSocio" className="block p-2 hover:bg-violet-200">Registro de Socio</Link>
                                        <Link href="/tablaSocios" className="block p-2 hover:bg-violet-200">Listado de Socios</Link>
                                        <Link href="/nombreSocio" className="block p-2 hover:bg-violet-200">Nombre de Socio</Link>
                                        <Link href="/registroVehiculo" className="block p-2 hover:bg-violet-200">Registro de Vehículo</Link>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200" >
                                <div className='flex'>
                                    <ImTree className='mr-3 text-3xl text-blue-socio' />
                                    <p>Clasificación de Socios</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <FaRegUserCircle className='mr-3 text-3xl text-blue-socio' />
                                    <p>Gestión de Perfil</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <div className='flex'>
                                        <FaCar className='mr-3 text-3xl text-blue-socio' />
                                        <p>Realizar Solicitudes de servicio</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <TbSteeringWheel className='mr-3 text-3xl text-blue-socio' />
                                    <p>Aceptar Solicitudes de servicio</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <FaHandHoldingUsd className='mr-3 text-3xl text-blue-socio' />
                                    <p>Gestión financiera</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <FaHandshakeSimple className='mr-3 text-3xl text-blue-socio' />
                                    <p>Gestión Comercial</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <TbMessage2Question className='mr-3 text-3xl text-blue-socio' />
                                    <p>PQRS</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5 hover:bg-violet-200">
                            <a href="#" className="p-1 block hover:bg-violet-200">
                                <div className='flex'>
                                    <AiOutlineAudit className='mr-3 text-3xl text-blue-socio' />
                                    <p>Auditoria</p>
                                </div>
                            </a>
                        </li>
                        <li className="my-1.5">
                            <button className="mx-12 mt-3 bg-blue-socio rounded-lg p-2">
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export { VerticalNavbar };



