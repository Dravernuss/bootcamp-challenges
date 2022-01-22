import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const PropuestasCandidatos = () => {
  const candidatos = useSelector((state) => {
    console.log(state);
    return state.candidatos.candidatos;
  });

  return (
    <Grid item container xs={12} md={6} spacing={2}>
      {candidatos.map((candidato) => {
        return (
          <Grid item xs={6} md={6} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography variant="h3" gutterBottom>
                  {candidato.nombre}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  {candidato.propuestas || "No tiene propuestas"}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Votos: {candidato.votos}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
