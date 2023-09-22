import { PencilSquareIcon, ClipboardDocumentListIcon, UserCircleIcon, IdentificationIcon, CreditCardIcon, MapPinIcon, MapIcon } from '@heroicons/react/24/outline'

const Home = () => {

  return (
    <div>
      <div className="relative z-1">
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 left-0 flex max-w-full">
              <div className="pointer-events-auto relative w-screen max-w-[340px]">
                <div className="flex h-full flex-col bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-2">
                    <div className="h-32 w-32">
                      <div className="flex place-content-center">
                        <UserCircleIcon className="h-20 w-20" aria-hidden="true" />
                      </div>
                      <div className="text-base text-center font-semibold leading-6 text-gray-500">
                        Preferencial
                      </div>
                    </div>
                    <hr className="my-4 w-88" color='text-black'/>
                    <div className="h-14 sm:px-3 text-2xl font-semibold leading-6 text-gray-900">
                      Mi perfil
                    </div>
                    <div className="w-screen min-w-0 flex flex-col gap-5 justify-center">
                      <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 bg-cyan-400/[.3] text-blue-600">
                        <div className="flex">
                          <IdentificationIcon className="mx-2 h-10 w-10" aria-hidden="true" />
                          <button className="h-10 w-64 max-w-[100%]">
                            Información Personal
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6">
                        <div className="flex">
                          <CreditCardIcon fill='black' className="mx-2 h-10 w-10 text-white" aria-hidden="true" />
                          <button className="h-10 w-64 ">
                            Métodos de pago
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6">
                        <div className="flex">
                          <MapPinIcon className="mx-2 h-10 w-10" aria-hidden="true" />
                          <button className="h-10 w-64 ">
                            Sitios favoritos
                          </button>
                        </div>
                      </div>
                      <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6">
                        <div className="flex">
                          <MapIcon className="mx-2 h-10 w-10" aria-hidden="true" />
                          <button className="h-10 w-64 ">
                            Historial de viajes
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="w-88 my-4"/>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
                </div>
              </div>
              <div>
                <div className="w-screen max-w-xl my-20 h-12">
                  <div className="flex flex-col">
                    <div className="flex place-content-center">
                      <ClipboardDocumentListIcon className="mx-4 h-12 w-12" aria-hidden="true" />
                      <div className="my-4 h-14 sm:px-3 text-4xl font-bold leading-6 text-gray-900">
                        Información personal
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-8 mx-8"> 
                  <div className="w-screen max-w-4xl mx-16 flex gap-2 place-content-start">
                    <div className="rounded-lg mx-12 w-0 text-lg font-semibold leading-6 text-gray-900">
                      Nombres
                    </div>
                    <input size={50} className="ml-24 mr-8 h-10 focus:outline-none text-center rounded-lg border-2 text-gray-700 border-gray-600 border-opacity-50" defaultValue="Diana Margot" />
                    <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6">
                        <button className="flex gap-1">
                          <PencilSquareIcon className="h-10" aria-hidden="true" />
                          <div className="mt-3">
                            Editar
                          </div>
                        </button>
                      </div>
                  </div>
                  <div className="w-screen max-w-4xl mx-16 flex gap-2 place-content-start">
                    <div className="rounded-lg mx-12 w-0 text-lg font-semibold leading-6 text-gray-900">
                      Apellidos
                    </div>
                      <input size={50} className="mx-24 h-10 focus:outline-none text-center rounded-lg border-2 text-gray-700 border-gray-600 border-opacity-50" defaultValue="López Bustamante" />
                  </div>
                  <div className="w-screen max-w-4xl mx-16 flex gap-2 place-content-start">
                    <div className="rounded-lg mx-12 w-0 text-lg font-semibold leading-6 text-gray-900">
                      Identificación
                    </div>
                      <input size={50} className="mx-24 h-10 focus:outline-none text-center rounded-lg border-2 text-gray-700 border-gray-600 border-opacity-50" defaultValue="104256789" />
                  </div>
                  <div className="w-screen max-w-4xl mx-16 flex gap-2 place-content-start">
                    <div className="rounded-lg mx-12 w-0 text-lg font-semibold leading-6 text-gray-900">
                      Correo
                    </div>
                      <input size={50} className="mx-24 h-10 focus:outline-none text-center rounded-lg border-2 text-gray-700 border-gray-600 border-opacity-50" defaultValue="correo@udea.edu.co" />
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
