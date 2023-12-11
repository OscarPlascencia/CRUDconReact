import React from "react";
import { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: "1",
    incidencia: "golpe en laser",
    prioridad: "alta",
    fecha_i: "09/06/2023",
    creado: "Oscar",
    sucursal: "Occidental",
    asignado_a: "Oscar",
    fecha_t: "09/06/23",
    status: "cerrado",
    observaciones: "ninguna",
  },
  {
    id: "2",
    incidencia: "golpe en laser",
    prioridad: "alta",
    fecha_i: "09/06/2023",
    creado: "Kenia",
    sucursal: "Occidental",
    asignado_a: "Oscar",
    fecha_t: "09/06/23",
    status: "cerrado",
    observaciones: "ninguna",
  },
  {
    id: "3",
    incidencia: "golpe en laser",
    prioridad: "alta",
    fecha_i: "09/06/2023",
    creado: "Mayra",
    sucursal: "Occidental",
    asignado_a: "Oscar",
    fecha_t: "09/06/23",
    status: "cerrado",
    observaciones: "ninguna",
  },
  {
    id: "4",
    incidencia: "error en laser",
    prioridad: "alta",
    fecha_i: "09/06/2023",
    creado: "Oscar",
    sucursal: "Occidental",
    asignado_a: "Oscar",
    fecha_t: "09/06/23",
    status: "cerrado",
    observaciones: "ninguna",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    // console.log(data)
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Esta usted seguro de eliminar este registro '${id}?`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD App</h2>
      <article className="grid-1-2">
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
      </article>
    </div>
  );
};

export default CrudApp;
