import React from "react";
import { useState, useEffect } from "react";

const initialForm = {
  id: null,
  incidencia: "",
  prioridad: "",
  fecha_i: "",
  creado: "",
  sucursal: "",
  asignado_a: "",
  fecha_t: "",
  status: "",
  observaciones: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initialForm);
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.incidencia ||
      !form.prioridad ||
      !form.fecha_i ||
      !form.creado ||
      !form.sucursal ||
      !form.asignado_a ||
      !form.fecha_t ||
      !form.status ||
      !form.observaciones
    ) {
      alert("Datos incompletos");
      return;
    }
    if (form.id == null) {
      createData(form);
    } else {
      updateData(form);
    }
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="incidencia"
          placeholder="Incidencia"
          onChange={handleChange}
          value={form.incidencia}
        />
        <input
          type="text"
          name="prioridad"
          placeholder="Prioridad"
          onChange={handleChange}
          value={form.prioridad}
        />
        <input
          type="text"
          name="fecha_i"
          placeholder="Fecha de Apertura"
          onChange={handleChange}
          value={form.fecha_i}
        />
        <input
          type="text"
          name="creado"
          placeholder="Creado por"
          onChange={handleChange}
          value={form.creado}
        />
        <input
          type="text"
          name="sucursal"
          placeholder="Sucursal"
          onChange={handleChange}
          value={form.sucursal}
        />
        <input
          type="text"
          name="asignado_a"
          placeholder="Asignado a"
          onChange={handleChange}
          value={form.asignado_a}
        />
        <input
          type="text"
          name="fecha_t"
          placeholder="Fecha de resolucion"
          onChange={handleChange}
          value={form.fecha_t}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={handleChange}
          value={form.status}
        />
        <input
          type="text"
          name="observaciones"
          placeholder="Observaciones"
          onChange={handleChange}
          value={form.observaciones}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;
