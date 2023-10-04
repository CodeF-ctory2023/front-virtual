import React, { useState } from 'react';
import { UserCircleIcon, IdentificationIcon, CreditCardIcon, MapPinIcon, MapIcon, QrCodeIcon, QueueListIcon, ListBulletIcon } from '@heroicons/react/24/outline'

interface MenuToggleProps {
  menuItems: string[];
}

const MenuToggle: React.FC<MenuToggleProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu}
      >
        <ListBulletIcon className="w-4 h-4" />
        
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <ul>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <div className="pointer-events-auto relative w-screen max-w-[340px]">
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
                    <hr className="my-4 w-88" color='text-black'/>
                    <div className="h-14 sm:px-3 text-2xl font-semibold leading-6 text-gray-900">
                      Mi perfil
                    </div>
                    <div className=" min-w-0 flex flex-col gap-5 justify-center">
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
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuToggle;