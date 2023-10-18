import {
  PencilSquareIcon,
  ClipboardDocumentListIcon,
  UserCircleIcon,
  IdentificationIcon,
  CreditCardIcon,
  MapPinIcon,
  MapIcon,
  RectangleGroupIcon,
  BanknotesIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';
import {Menu} from '../components/menu';
/* import {Tarjeta} from '../components/tarjetas'; */

const Home = () => {
  return (
    <div>
      <div className='relative z-1'>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='fixed inset-y-0 left-0 flex max-w-full'>
              <Menu />
              <div className='w-full px-18  flex flex-row  ml-11'>
                <form className='tarea-formulario px-18 pr-6 pt-6 pb-8 mb-4  '>
                  <div className=' mb-4 '>
                    <div className='flex place-content-start mb-10 mt-11 '>
                      <ClipboardDocumentListIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Información personal
                      </div>
                    </div>
                  </div>
                  <div className=' mb-4 mt-16 '>
                    <div className=' mb-4 '>
                      <div className=' grid grid-flow-row sm:grid-flow-col gap-3 '>
                        <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                          <label className='block text-gray-700 text-lg font-bold mb-2'>
                            Nombres{' '}
                          </label>
                        </div>
                        <div className='sm:col-span-4 justify-center '>
                          <input
                            size={50}
                            type='text'
                            className='tarea-input text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='nombre '
                            name='texto'
                          />
                        </div>
                      </div>
                    </div>
                    <div className=' mb-4 '>
                      <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                        <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                          <label className='block text-gray-700 text-lg font-bold mb-2'>
                            Apellidos
                          </label>
                        </div>
                        <div className='sm:col-span-4 justify-center '>
                          <input
                            size={50}
                            type='text'
                            className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='apellido '
                            name='apellido'
                          />
                        </div>
                      </div>
                    </div>
                    <div className=' mb-4 '>
                      <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                        <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11 mb-4'>
                          <label className='block text-gray-700 text-lg font-bold mb-2'>
                            Identificacion
                          </label>
                        </div>
                        <div className='sm:col-span-4 justify-center '>
                          <input
                            size={50}
                            type='text'
                            className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                            placeholder='documento'
                            name='id'
                          />
                        </div>
                      </div>
                    </div>
                    <div className=' mb-4 '>
                      <div className=' grid grid-flow-row sm:grid-flow-col gap-3'>
                        <div className='w-20 sm:col-span-4 justify-center ml-16 mr-11'>
                          <label className='block text-gray-700 text-lg font-bold mb-2'>
                            Correo
                          </label>
                        </div>
                        <div className='sm:col-span-4 justify-center '>
                          <input
                            size={50}
                            type='text'
                            className='text-center shadow apperance-none border rounded-lg  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline '
                            placeholder='correo '
                            name='email'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <button className='tarea-boton'>agregar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
