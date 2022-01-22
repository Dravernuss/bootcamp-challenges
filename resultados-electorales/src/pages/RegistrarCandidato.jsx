import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { nuevoCandidato } from "../redux/features/candidatosSlice";
import { CandidatosContext } from "../utils/CandidatosContext";

export const RegistrarCandidato = () => {
  const [candidato, setCandidato] = useState(null);
  const dispatch = useDispatch();

  const onInputChange = (inputName) => (inputValue) => {
    setCandidato({ ...candidato, [inputName]: inputValue.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Registrar Candidato
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(nuevoCandidato(candidato));
          }}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onInputChange("firstName")}
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Nombre"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onInputChange("lastName")}
                required
                fullWidth
                id="lastName"
                label="Apellido"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                onChange={onInputChange("propuestas")}
                required
                fullWidth
                multiline
                rows={4}
                id="propuestas"
                label="Propuestas"
                name="propuestas"
                autoComplete="family-name"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Registrar
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
