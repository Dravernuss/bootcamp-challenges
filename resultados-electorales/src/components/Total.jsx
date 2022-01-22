import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { CandidatosContext } from "../utils/CandidatosContext";

export const Total = () => {
  const candidatos = useSelector((state) => {
    return state.candidatos.candidatos;
  });

  const total = candidatos.reduce(
    (accumulator, candidato) => accumulator + candidato.votos,
    0
  );

  return (
    <Grid item container xs={12} md={6} spacing={2}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Total Candidatos:
            </Typography>
            <Typography variant="h3" gutterBottom>
              {candidatos.length}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Total Votos:
            </Typography>
            <Typography variant="h3" gutterBottom>
              {total}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
