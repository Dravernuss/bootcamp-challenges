import { createContext, useContext, useState } from "react";
import { NotificacionesContext } from "./NotificacionesContext";

export const CandidatosContext = createContext();

export const CandidatosProvider = ({ children }) => {
  const [candidatos, setCandidatos] = useState([
    { nombre: "Hugo", votos: 0 },
    { nombre: "Paco", votos: 0 },
    { nombre: "Luis", votos: 0 },
  ]);
  const { setNotificacion } = useContext(NotificacionesContext);

  const votar = (votarPor) => {
    const nuevosVotos = votarPor.votos + 1;

    const nuevos = candidatos.map((candidato) => {
      if (candidato.nombre === votarPor.nombre) {
        return {
          ...candidato,
          votos: nuevosVotos,
        };
      }
      return { ...candidato };
    });

    setCandidatos(nuevos);
    setNotificacion(`Votaste por el candidato: ${votarPor.nombre}`);
  };

  const nuevoCandidato = (candidato) => {
    if (candidato !== null) {
      setCandidatos((estadoPrevio) => [
        ...estadoPrevio,
        { nombre: `${candidato.firstName} ${candidato.lastName}`, votos: 0 },
      ]);
      setNotificacion("Candidato Añadido");
    }
  };

  return (
    <CandidatosContext.Provider value={{ candidatos, votar, nuevoCandidato }}>
      {children}
    </CandidatosContext.Provider>
  );
};
