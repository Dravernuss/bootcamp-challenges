import { useSelector } from 'react-redux';
import { Card, CardContent, Grid, Typography } from '@mui/material';

export const CandidatosList = () => {
  const candidatos = useSelector(state => state.candidatos.candidatos);

  return (
    <>
      {candidatos.map(candidato => (
        <Grid item xs={6} md={4} key={candidato.nombre}>
          <Card>
            <CardContent>
              <Typography variant="h3" gutterBottom>
                {candidato.nombre}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {candidato.propuestas || 'No tiene propuestas 😢'}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Votos: {candidato.votos}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
