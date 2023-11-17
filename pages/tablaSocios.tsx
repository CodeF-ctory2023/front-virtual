import React from 'react';
import { VerticalNavbar } from '@/components/GestionSociosComponent/NavBar';

import { ListadoSocios } from '@/components/GestionSociosComponent/ListadoSocios';
import { useFetchSocios } from '@/hooks/useFetchSocios';

const TablaSocios: React.FC = () => {
  const { socios, isLoading } = useFetchSocios();

  return (
    <>
      <VerticalNavbar />
      <div>
        <div className='flex items-center justify-center bg-blue-socio p-4 rounded-sm'>
          <h1 className='text-[35px] text-white text-center font-semibold'>
            Tabla de Socios
          </h1>
        </div>
        {isLoading && <h2>Cargando socios...</h2>}

        <div className='overflow-x-auto'>
          <table className='min-w-full'>
            <thead className='border-double border-2 pd-1'>
              <tr >
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  Cédula
                </th>
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  Nombre
                </th>
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  Teléfono
                </th>
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  Licencia
                </th>
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  P. Judicial
                </th>
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  Estado
                </th>
                <th className='px-6 py-3 bg-gray-socio text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                  Info
                </th>
              </tr>
            </thead>

            {socios.map((socio) => (
              <ListadoSocios key={socio.id} {...socio} />
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default TablaSocios;
