import React from 'react';
import { PencilSquareIcon, ClipboardDocumentListIcon, UserCircleIcon, IdentificationIcon, CreditCardIcon, MapPinIcon, MapIcon } from '@heroicons/react/24/outline'

function Menu() {
  return (
    <div className="w-auto grid  sm:grid-flow-col gap-3 hidden md:block ">
      <div className="flex h-full flex-col bg-white py-6 shadow-xl">
        <div className="px-4 sm:px-2 ">
          <div className="h-32 w-32">
            <div className="flex place-content-center">
              <UserCircleIcon className="h-20 w-20" aria-hidden="true" />
            </div>
            <div className="text-base text-center font-semibold leading-6 text-gray-500">
              Preferencial
            </div>
          </div>
          <hr className="my-4 w-88" color='text-black' />
          <div className="h-14 sm:grid-flow-col text-2xl font-semibold leading-6 text-gray-900">
            Mi perfil
          </div>
          <div className=" min-w-0 flex flex-col gap-5 justify-center">
            <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6  hover:bg-cyan-400/[.3] hover:text-blue-600">
              <div className="flex">
                <IdentificationIcon className="mx-2 h-10 w-10" aria-hidden="true" />
                <button className="h-10 w-64 max-w-[100%]" onClick={() => window.location.href = '/info'}>
                  Información Personal
                </button>
              </div>
            </div>
            <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600 ">
              <div className="flex">
                <CreditCardIcon fill='black' className="mx-2 h-10 w-10 text-white" aria-hidden="true" />
                <button className="h-10 w-64 " onClick={() => window.location.href = '/MetodosPago'}>
                  Métodos de pago
                </button >
              </div>
            </div>
            <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600">
              <div className="flex">
                <MapPinIcon className="mx-2 h-10 w-10" aria-hidden="true" />
                <button className="h-10 w-64 ">
                  Sitios favoritos
                </button>
              </div>
            </div>
            <div className="rounded-lg w-80 sm:px-2 text-lg font-semibold leading-6 hover:bg-cyan-400/[.3] hover:text-blue-600">
              <div className="flex">
                <MapIcon className="mx-2 h-10 w-10" aria-hidden="true" />
                <button className="h-10 w-64 ">
                  Historial de viajes
                </button>
              </div>
            </div>
          </div>
          <hr className="w-88 my-4" />
        </div>
        <div className="relative mt-6 flex-1 px-4 sm:px-6"></div>
      </div>
    </div>
  )
}
export default Menu;