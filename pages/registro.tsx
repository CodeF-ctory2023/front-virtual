import { XCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import * as React from 'react';
import Overlay from '../components/Overlays/overlay';
import {Notification} from '@/components/Overlays/notification';
import { Dispatch, SetStateAction } from 'react';

interface RegistroProps{
    isOpen:boolean;
    setIsOpen:Dispatch<SetStateAction<boolean>>;
}
const Home = () =>{
    const [error, setError] = React.useState(String);
    const [isOpen, setIsOpen] = React.useState(false);
    
    const toggleOverlay = () => {
        setIsOpen(!isOpen);
    };

    const handleTest = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError(e.target.value);
    };

return(
    <div>
        <Overlay isOpen={isOpen} setIsOpen={setIsOpen} onClose={toggleOverlay}>
            <Notification title={error === "Robin Hood" ? "Registro Fallido" : "Registro Exitoso"} description={error === "Robin Hood" ? 'El usuario ya existe o no ha podido ser registrado' : 'El usuario se ha registrado exitosamente'} isOpen={isOpen}  setIsOpen={setIsOpen} onClose={toggleOverlay}>
                <UserCircleIcon color={error === "Robin Hood" ? 'red' : 'green'} className='ml-1 h-12 w-12'/>
            </Notification>
        </Overlay>
        <div className=" top-0 bottom-0 right-0 left-0 m-auto w-fit flex flex-row">
            <form className=" px-18 pr-6 pt-6 pb-8 mb-4  ">
                <div className=' mb-4 '>      
                    <div className="flex place-content-start mb-10 mt-11 ">
                        <UserCircleIcon className="ml-1 h-12 w-12" aria-hidden="true" />
                        <div className="my-2 h-12 sm:px-3 text-3xl font-bold leading-6 text-gray-900">
                            Registro de usuario
                        </div>
                    </div>
                </div>
                <div className=' ml-20 mb-4 mt-12 '>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" onChange={handleTest} className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Nombres' />
                                </div>
                            </div>
                        </div>
                    <div className=' mb-4 '>
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} type="text" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Apellidos' />
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} type="text" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Documento' />
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} type="text" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Email' />
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} type="text" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Contraseña' />
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 '>        
                        <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                            <div className='sm:col-span-4 justify-center '>
                                <input size={50} type="text" className='shadow apperance-none border rounded-lg  py-2 px-3 placeholder:text-black text-black bg-sky-200 leading-tight focus:outline-none focus:shadow-outline'placeholder='Repita la Contraseña' />
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-2 px-18 flex justify-end flex-row gap-10">
                        <button type="button" className="flex gap-1 ">
                            <XCircleIcon className="ml-1 h-10 w-10" aria-hidden="true" />
                            <div className="mt-2">
                                Cancel
                            </div>
                        </button>
                        <button type="button" className="flex gap-1 " onClick={toggleOverlay}>
                            <ArrowRightOnRectangleIcon className="ml-1 h-10 w-10" aria-hidden="true" />
                            <div className="mt-2">
                                Registrar
                            </div>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
export default Home;