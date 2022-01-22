import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from "@mui/material";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { votar } from "../redux/features/candidatosSlice";
import { CandidatosContext } from "../utils/CandidatosContext";

export const Candidatos = () => {
  const candidatos = useSelector((state) => {
    return state.candidatos.candidatos;
  });
  const dispatch = useDispatch();

  return (
    <Grid container item spacing={2}>
      {candidatos.map((candidato, index) => {
        {
          /* {candidatos.map((candidato) => { */
        }
        return (
          <Grid item xs={4} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography>{candidato.nombre}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() => dispatch(votar(index))}
                  // onClick={() => dispatch(votar(candidato))}
                >
                  Votar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
