import React from 'react';
import { ListadoSocios } from '@/components/GestionSociosComponent/ListadoSocios';
import { useFetchSocios } from '@/hooks/useFetchSocios';

interface Socio {
  id: number;
  cedula: string;
  nombre: string;
  telefono: string;
  licencia: string;
  pJudicial: string;
  estado: string;
  info: string;
}

const TablaSocios: React.FC = () => {
  const { socios, isLoading } = useFetchSocios();

  return (
    <div>
      <h1>Tabla de Socios</h1>
      {isLoading && <h2>Cargando socios...</h2>}

      <div className='overflow-x-auto'>
        <table className='min-w-full'>
          <thead>
            <tr>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                Cédula
              </th>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                Nombre
              </th>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                Teléfono
              </th>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                Licencia
              </th>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                P. Judicial
              </th>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                Estado
              </th>
              <th className='px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider'>
                Info
              </th>
            </tr>
          </thead>

          {socios.map((socio: Socio) => (
            <ListadoSocios
              key={socio.id}
              documentoIdentidad={Number(socio.cedula)}
              nombre={socio.nombre}
              telefono={Number(socio.telefono)}
              licenciaConducir={socio.licencia}
              pasadoJudicial={socio.pJudicial}
              estadoVerificacion={socio.estado}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

export default TablaSocios;
