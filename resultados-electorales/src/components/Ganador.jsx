import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const obtenerGanador = (state) => {
  return state.candidatos.candidatos.reduce((max, obj) =>
    max.votos > obj.votos ? max : obj
  );
};

export const Ganador = () => {
  const { nombre: nombreGanador } = useSelector(obtenerGanador);
  return (
    <Grid item xs={6} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Ganador:
          </Typography>
          <Typography variant="h3" gutterBottom>
            {nombreGanador}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
