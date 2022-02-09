import {
  Grid,
  Button,
  CardActions,
  CardContent,
  Typography,
  Card,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { votar } from '../redux/features/candidatosSlice';
import { crearNotificacion } from '../redux/features/notificacionesSlice';

export const Candidatos = () => {
  const candidatos = useSelector(state => state.candidatos.candidatos) || [];
  const dispatch = useDispatch();

  return (
    <Grid container item spacing={2} xs={12} md={12}>
      {candidatos.map((candidato, index) => {
        return (
          <Grid item xs={4} md={4} key={candidato.nombre}>
            <Card>
              <CardContent>
                <Typography variant="h3">{candidato.nombre}</Typography>
                <Typography variant="h5" color="text.secondary">
                  Votos actuales: {candidato.votos}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="medium"
                  onClick={() => {
                    dispatch(votar(index));
                    dispatch(
                      crearNotificacion({
                        mensaje: `Acabas de votar por ${candidato.nombre}`,
                      })
                    );
                  }}
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
