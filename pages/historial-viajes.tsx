import {
  RectangleGroupIcon,
} from '@heroicons/react/24/outline';
import {Menu} from '@/components/menu';
/* import {Tarjeta} from '../components/tarjetas'; */
import React from 'react';
import { Viajes } from '../components/Viajes';
import { Travel } from "@/interfaces/user.interfaces";

const testTravels: Travel[] = [
  { origin: 'Origen 1', destiny: 'Destino 1', cost: 100, completed: 0 },
  { origin: 'Origen 2', destiny: 'Destino 2', cost: 85.34, completed: 1 },
  { origin: 'Origen 3', destiny: 'Destino 3', cost: 21.41, completed: 2 },
];

const historialviajes = () => {

  const [travels, setLoadTravels] = React.useState(testTravels);

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
                      <RectangleGroupIcon
                        className='ml-1 h-12 w-12'
                        aria-hidden='true'
                      />
                      <div className='my-4 h-12 sm:px-3 text-4xl font-bold leading-6 text-gray-900'>
                        Historial de Viajes 
                      </div>
                    </div>  
                  </div>
                  <div className='flex flex-col w-full   '>
                    <Viajes loadTravels={travels} setLoadTravels={setLoadTravels} />
                  </div>
                </div>
                <div className=' w-18 h-60 mt-16  mr-6 text-lg font-semibold leading-6 '>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default historialviajes