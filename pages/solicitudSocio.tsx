import React from 'react';
import {TablaGestionSocios} from '@/components/GestionSociosComponent/table';

const data = [
  {
    title1: '####',
    title2: 'xxxxxx',
    title3: '####',
    title4: '',
    title5: 'P.Judicial',
    title6: 'ACEPTADO',
    title7: ''
  },
  {
    title1: '####',
    title2: '----',
    title3: '####',
    title4: '',
    title5: 'P.Judicial',
    title6: 'rechazado',
    title7: ''
  },
];

const secondPage: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-blue-socio p-2 rounded-sm">
        <h1 className="text-white text-center font-semibold">
          Solicitud de Socios
        </h1>
      </div>
      <div className="p-2">
        <TablaGestionSocios data={data} />
      </div>
    </div>
  );
}

export default secondPage;