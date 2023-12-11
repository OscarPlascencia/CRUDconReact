import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let {
    id,
    incidencia,
    prioridad,
    fecha_i,
    creado,
    sucursal,
    asignado_a,
    fecha_t,
    status,
    observaciones,
  } = el;

  return (
    <tr>
      <td>{incidencia}</td>
      <td>{prioridad}</td>
      <td>{fecha_i}</td>
      <td>{creado}</td>
      <td>{sucursal}</td>
      <td>{asignado_a}</td>
      <td>{fecha_t}</td>
      <td>{status}</td>
      <td>{observaciones}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
