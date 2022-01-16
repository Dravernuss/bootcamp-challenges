import React, { useState, useEffect, useReducer } from "react";
import Formulario from "../components/formulario";
import ListaTareas from "../components/listaTareas";
import tareas from "../utils/tareas";

const ACTIONS = {
  CARGAR_TAREAS: "cargar-tareas",
  CREAR_TAREA: "crear-tarea",
  TOGGLE_TAREA: "toggle-tarea",
  EDITAR_TAREA: "editar-tarea",
  DELETE_TAREA: "eliminar-tarea",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CARGAR_TAREAS:
      return tareas;
    case ACTIONS.CREAR_TAREA:
      return [...state, crearTarea(action.payload.tarea)];
    case ACTIONS.TOGGLE_TAREA:
      return state.map((tarea) =>
        tarea.id === action.payload.id
          ? { ...tarea, completado: !tarea.completado }
          : tarea
      );
    case ACTIONS.EDITAR_TAREA:
      return state.map((tarea) => {
        return tarea.id === action.payload.tarea.id
          ? { ...tarea, titulo: action.payload.tarea.titulo }
          : tarea;
      });
    case ACTIONS.DELETE_TAREA:
      return state.filter((tarea) => tarea.id !== action.payload.id);

    default:
      return state;
  }
}

function crearTarea(tarea) {
  return {
    id: Math.random(4, 10000),
    titulo: tarea,
    completado: false,
  };
}

export default function Reducer() {
  // Estados del componente
  const [state, dispatch] = useReducer(reducer, []);
  const [editable, setEditable] = useState(null);

  // Ciclo de vida con hook useEffect
  useEffect(() => {
    dispatch({ type: ACTIONS.CARGAR_TAREAS });
  }, []);

  // función para agregar una nueva tarea
  const handleRegistrar = (tarea) => {
    dispatch({ type: ACTIONS.CREAR_TAREA, payload: { tarea } });
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    dispatch({ type: ACTIONS.TOGGLE_TAREA, payload: { id } });
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (tarea) => {
    dispatch({ type: ACTIONS.EDITAR_TAREA, payload: { tarea } });
    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    dispatch({ type: ACTIONS.DELETE_TAREA, payload: { id } });
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Lista de tareas</h1>
        <Formulario
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          listaTareas={state}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}
