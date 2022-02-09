import { Card, CardContent, Typography, Grid } from '@mui/material';
import { connect } from 'react-redux';

export const Escrutinio = ({ candidatos }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card>
        <CardContent>
          <Typography variant="h5">Escrutinio:</Typography>

          <Grid container item spacing={2}>
            {candidatos.map(candidato => (
              <Grid item xs={4} md={4} key={candidato.nombre}>
                <Typography variant="h3">{candidato.votos}</Typography>
                <Typography variant="h5" color="text.secondary">
                  {candidato.nombre}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const mapStateToProps = state => {
  return {
    candidatos: state.candidatos.candidatos,
  };
};

export default connect(mapStateToProps, null)(Escrutinio);
