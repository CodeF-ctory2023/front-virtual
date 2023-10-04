import { PencilSquareIcon, ClipboardDocumentListIcon, UserCircleIcon, IdentificationIcon, CreditCardIcon, MapPinIcon, MapIcon, RectangleGroupIcon, BanknotesIcon, PlusIcon } from '@heroicons/react/24/outline'
import Menu from '../components/menu';
import Tarjeta from '../components/tarjetas';

const Home = () => {

  return (
    <div>
      <div className="relative z-1">
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 left-0 flex max-w-full">
              <Menu />
              <div className="w-full px-18  flex flex-row  ml-11">
                <div className="h-full w-full ">
                  <div className=' mb-4 '>
                    <div className="flex place-content-start  mt-11 ">
                      <RectangleGroupIcon className="ml-1 h-12 w-12" aria-hidden="true" />
                      <div className="my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900">
                        Tarjetas Bancarias

                      </div>
                    </div>

                  </div>
                  <div className="mt-20 sm:ml-16  flex h-24 w-full  border rounded-lg">
                    <CreditCardIcon className="mx-4 mt-6 h-10 w-10 mr-16" />
                    <CreditCardIcon className="mx-4 mt-6 h-10 w-10 mr-16" />
                    <CreditCardIcon className="mx-4 mt-6 h-10 w-10 mr-16" />
                  </div>
                  <div className="pt-6 sm:ml-16 flex h-24 w-full  border rounded-lg">
                    <input type="text" className='h-12 text-center shadow apperance-none border rounded-lg  py-2 px-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='nombre' />
                  </div>
                  <div className="pt-6 sm:ml-16 flex h-24 w-full  border rounded-lg">
                    <input type="text" className='h-12 text-center shadow apperance-none border rounded-lg  py-2 px-40 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Numero de Tarjeta' />
                  </div>
                  <div className="pt-6 sm:ml-16 flex h-24 w-full  border rounded-lg">
                    <input type="text" className='mr-4 h-12 text-center shadow apperance-none border rounded-lg  py-2 px-24 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Fecha Expiracion' />
                    <input type="text" className='h-12 text-center shadow apperance-none border rounded-lg  py-2 w-28 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='CCV' />

                  </div>
                  <div className=" w-18 h-48 ml-72 flex flex-row  font-semibold  ">
                    <button className="flex  " onClick={() => window.location.href = '/EdicionTarjetas'}>
                      <PlusIcon className="h-10" aria-hidden="true" />
                      <div className="mt-3">
                        Agregar Tarjeta
                      </div>
                    </button>
                    <button className="ml-6 flex gap-1 " onClick={() => window.location.href = '/EdicionTarjetas'}>
                      <PlusIcon className="h-10" aria-hidden="true" />
                      <div className="mt-3">
                        Cancelar
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;