interface ListadoSociosProps {
  documentoIdentidad: number;
  nombre: string;
  telefono: number;
  licenciaConducir: string;
  pasadoJudicial: string;
  estadoVerificacion: string;
}
export const ListadoSocios = ({
  documentoIdentidad,
  nombre,
  telefono,
  licenciaConducir,
  pasadoJudicial,
  estadoVerificacion }: ListadoSociosProps) => {
  console.log(pasadoJudicial);
  return (
    <tbody>
      <tr className="even:bg-gray-100">
        <td className="px-6 py-4 whitespace-no-wrap">
          {documentoIdentidad}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {nombre}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {telefono}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {licenciaConducir}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {pasadoJudicial}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {estadoVerificacion}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Detalles
          </button>
        </td>
      </tr>
    </tbody>
  )
}
