interface ListadoSociosProps {
  cedula: number;
  nombre: string;
  telefono: number;
  licencia: string;
  pjudicial: boolean;
  estado: string;
}
export const ListadoSocios = ({
  cedula,
  nombre,
  telefono,
  licencia,
  pjudicial,
  estado }: ListadoSociosProps) => {
  return (
    <tbody>
      <tr className="even:bg-gray-100">
        <td className="px-6 py-4 whitespace-no-wrap">
          {cedula}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {nombre}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {telefono}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {licencia}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {pjudicial}
        </td>
        <td className="px-6 py-4 whitespace-no-wrap">
          {estado}
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
