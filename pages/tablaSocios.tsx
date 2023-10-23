import React from 'react';
import { ListadoSocios } from '@/components/GestionSociosComponent/ListadoSocios';
import { useFetchSocios } from '@/hooks/useFetchSocios';

const TablaSocios: React.FC = () => {
  const { socios, isLoading } = useFetchSocios();

  return (
    <div>
      <h1>Tabla de Socios</h1>
      {isLoading && <h2>Cargando socios...</h2>}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Cédula
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Nombre
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Teléfono
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Licencia
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                P. Judicial
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
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
  );
};

export default TablaSocios;