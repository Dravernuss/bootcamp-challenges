import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nuevoCandidato } from "../redux/features/candidatosSlice";
import { crearNotificacion } from "../redux/features/notificacionesSlice";

const initialCandidato = {
  nombre: "",
  apellido: "",
  propuestas: "",
};

export const errors = {
  nombre: "Nombre no puede ser vacío",
  apellido: "Apellido no puede ser vacío",
  propuestas: "Propuestas no puede ser vacío",
};

const candidatoEsValido = (candidato) => {
  const validation = { isValid: true, formErrors: {} };

  if (candidato.nombre === "") {
    validation.isValid = false;
    validation.formErrors.nombre = errors.nombre;
  }

  if (candidato.apellido === "") {
    validation.isValid = false;
    validation.formErrors.apellido = errors.apellido;
  }

  if (candidato.propuestas === "") {
    validation.isValid = false;
    validation.formErrors.propuestas = errors.propuestas;
  }

  return validation;
};

export const RegistrarCandidato = () => {
  const [candidato, setCandidato] = useState(initialCandidato);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const onInputChange = (inputName) => (inputValue) => {
    setCandidato({ ...candidato, [inputName]: inputValue.target.value });
  };

  const crearCandidato = (candidato) => {
    const { isValid, formErrors } = candidatoEsValido(candidato);
    if (isValid) {
      dispatch(nuevoCandidato(candidato));
      dispatch(
        crearNotificacion({
          mensaje: `Candidato ${candidato.nombre} ${candidato.apellido} creado`,
        })
      );
      setCandidato(initialCandidato);
      setErrors({});
    } else {
      setErrors(formErrors);
      dispatch(
        crearNotificacion({
          mensaje: "Error creando al candidato",
          severity: "error",
        })
      );
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    crearCandidato(candidato);
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
        <Box component="form" noValidate onSubmit={onSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onInputChange("nombre")}
                name="nombre"
                fullWidth
                value={candidato.nombre}
                label="Nombre"
                autoFocus
                error={!!errors.nombre}
                helperText={errors.nombre}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={onInputChange("apellido")}
                name="apellido"
                value={candidato.apellido}
                fullWidth
                label="Apellido"
                error={!!errors.apellido}
                helperText={errors.apellido}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                onChange={onInputChange("propuestas")}
                name="propuestas"
                value={candidato.propuestas}
                fullWidth
                multiline
                rows={4}
                label="Propuestas"
                error={!!errors.propuestas}
                helperText={errors.propuestas}
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
