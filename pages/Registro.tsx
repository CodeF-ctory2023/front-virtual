import { PencilSquareIcon, ClipboardDocumentListIcon, UserCircleIcon, IdentificationIcon, CreditCardIcon, MapPinIcon, MapIcon, RectangleGroupIcon, BanknotesIcon, PlusIcon } from '@heroicons/react/24/outline'
import Menu from '../components/menu';
import Tarjeta from '../components/tarjetas';

const Home = () => {

  return (
    <div className='  text-center grid justify-items-center'>
        <form className=" px-18 pr-6 pt-6 pb-8 mb-4  ">
                    <div className=' mb-4 '>
                        <div className="flex place-content-start mb-10 mt-11 ">
                        <UserCircleIcon className="h-20 w-20" aria-hidden="true" />
                            <div className="my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900">
                                Registrar Usuario
                            </div>
                        </div>
                    </div>
                    <div className=' mb-4 mt-16 '>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                                
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='nombre ' />
                                </div>

                            </div>

                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='apellido ' />
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='documento' />
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='correo ' />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='Contraseña ' />
                                </div>
                            </div>
                        </div>
                        <div className=' mb-4 '>
                            <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                                
                                <div className='sm:col-span-4 justify-center '>
                                    <input size={50} type="text" className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ' placeholder='Repita Contraseña' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-18 h-48 ml-72 flex flex-row  font-semibold  ">
                    <button className="flex  " onClick={() => window.location.href = '/EdicionTarjetas'}>
                      <PlusIcon className="h-10" aria-hidden="true" />
                      <div className="mt-3">
                        Registrar
                      </div>
                    </button>
                    <button className="ml-6 flex gap-1 " onClick={() => window.location.href = '/EdicionTarjetas'}>
                      <PlusIcon className="h-10" aria-hidden="true" />
                      <div className="mt-3">
                        Cancelar
                      </div>
                    </button>
                  </div>
                </form>
        
    </div>
  )
}

export default Home;