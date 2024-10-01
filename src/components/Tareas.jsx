import React from "react";
import { useState } from "react";
export default function Tareas() {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  function handleChange(e) {
    setTarea(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
    console.log("tareas =>", tareas);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={tarea}
          onChange={handleChange}
          type="text"
          placeholder="Ingrese una tarea"
        />
        <button type="submit">Agregar</button>
      </form>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </>
  );
}
