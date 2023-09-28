import React from "react";
import { ButtonSocios } from "./ButtonSocios";

interface Data {
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  title7: string;
}

interface Props {
  data: Data[];
}

const Tabla: React.FC<Props> = ({ data }) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-socio border-double border-2 pd-1">
        <tr className="text-xs text-center">
          <th>Cédula</th>
          <th>Nombre</th>
          <th>Telefono</th>
          <th>Licencia</th>
          <th>P.Judicial</th>
          <th>Estado</th>
          <th>Info</th>
        </tr>
      </thead>
      <style>{`
        tbody tr:nth-child(odd) {
          background-color: #EFEFF8;
        }
      `}</style>
      <tbody className="text-center text-[9px] bg-gray-200">
        {data.map((item, index) => (
          <tr key={index} className="h-6">
            <td>{item.title1}</td>
            <td>{item.title2}</td>
            <td>{item.title3}</td>
            <td>{item.title4}</td>
            <td>{item.title5}</td>
            {item.title6.toUpperCase() === "ACEPTADO" ? (
              <td>
                <ButtonSocios
                  color="#ABD08D"
                  children="Aceptado"
                  onClick={() => console.log("You clicked on the pink circle!")}
                />
                </td>
            ) : item.title6.toUpperCase() === "RECHAZADO" ? (
              <td>
                <ButtonSocios
              color="#F39A9E"
              children="Rechazado"
              onClick={() => console.log("You clicked on the pink circle!")}
            />
            </td>
            ) : item.title6.toUpperCase() === "PENDIENTE" ? (
              <td>
                <ButtonSocios
              color="#FBCB9E"
              children="Pendiente"
              onClick={() => console.log("You clicked on the pink circle!")}
            />
            </td>
            ) : item.title6.toUpperCase() === "RETIRADO" ? (
              <td>
                <ButtonSocios
              color="rgb(156 163 175)"
              children="Retirado"
              onClick={() => console.log("You clicked on the pink circle!")}
            />
            </td>
            ) : (
              <td>{item.title6}</td>
            )}
            <td>{item.title7}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Tabla;

/*<ButtonSocios
color="#6662D9"
children="New Button!"
onClick={() => console.log("You clicked on the pink circle!")}
/>*/