import { useState } from "react";
import Tareas from "./components/Tareas";
function App() {
  /*   const productos = [
    { id: 1, nombre: "producto 1", precio: 100 },
    { id: 2, nombre: "producto 2", precio: 200 },
    { id: 3, nombre: "producto 3", precio: 300 },
  ]; */
  /* const colores = [
    { id: 1, nombre: "rojo", hex: "#FF0000" },
    { id: 2, nombre: "verde", hex: "#00FF00" },
    { id: 3, nombre: "azul", hex: "#0000FF" },
    { id: 4, nombre: "amarillo", hex: "#FFFF00" },
    { id: 5, nombre: "morado", hex: "#800080" },
  ]; */
  return (
    <>
      <h1>renderizacion dinamica de componentes</h1>
      <Tareas />
      {/*  <ul>
        {productos.map((producto, i) => (
          <li key={i}>producto: {producto.nombre}</li>
        ))}
      </ul>
      <ul>
        <li className=""> producto: {productos[0].nombre}</li>
        <li> producto: {productos[1].nombre}</li>
        <li> producto: {productos[2].nombre}</li>
      </ul> */}

      {/*  <ul>
        {colores.map((color, i) => (
          <li style={{ color: color.hex }} key={i}>
            {color.nombre}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
