import {
  PlusCircleIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import { Menu } from '@/components/menu';
/* import {Tarjeta} from '../components/tarjetas'; */
import React, { useState } from 'react';
import { Sitios } from '../components/sitios';
import { Sites } from '@/interfaces/user.interfaces';

const testSites: Sites[] = [
  { id: 0, imageId: 0, name: 'Casa', address: 'Dirección 1' },
  { id: 1, imageId: 1, name: 'Trabajo', address: 'Dirección 2' },
  { id: 2, imageId: 2, name: 'Universidad', address: 'Dirección 3' },
];

const sitiosfavoritos = () => {

  const [sites, setSites] = useState(testSites);

  const [newSite, setNewSite] = React.useState({
    id: 0,
    imageId: 0,
    name:  '',
    address:   '',
  });

  const handleAdd = () => {
    setNewSite({
      ...newSite,
      id: sites.length
    });
    setSites([
      ...sites,
      newSite
    ]);
  }

  return (
    <div>
      <div className='relative z-1'>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='fixed inset-y-0 left-0 flex max-w-full'>
              <Menu />
              <div className='w-full px-18  flex flex-row  ml-11'>
                <div className='h-full w-full '>
                  <div className=' mb-4 '>
                    <div className='flex place-content-start  mt-11 '>
                      <MapPinIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Sitios Favoritos
                      </div>
                      <div className='mt-4 ml-10 text-lg font-semibold leading-6 '>
                        <button
                          className='flex gap-2 '
                          onClick={handleAdd}
                        >
                          <div className='mt-1'>Agregar</div>
                          <PlusCircleIcon className='h-8' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col w-full   '>
                    <Sitios loadSites={sites} setLoadSites={setSites}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default sitiosfavoritos;
