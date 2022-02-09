import Escrutinio from "../components/Escrutinio";
import { Ganador } from "../components/Ganador";
import { Total } from "../components/Total";

export const Resumen = () => {
  return (
    <>
      <Total />
      <Escrutinio />
      <Ganador />
    </>
  );
};
