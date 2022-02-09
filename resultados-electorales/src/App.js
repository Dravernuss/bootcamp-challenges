import "./_App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import { Box, Grid } from "@mui/material";
import { RegistrarCandidato } from "./pages/RegistrarCandidato";
import { Resumen } from "./pages/Resumen";
import { CandidatosList } from "./pages/Candidatos";
import { Votar } from "./pages/Votar";
import { Navbar } from "./components/NavBar";
import { Notificaciones } from "./components/Notificaciones";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Box
          sx={{
            margin: 2,
          }}
        >
          <Grid container item spacing={2}>
            <Routes>
              <Route index element={<Resumen />}></Route>
              <Route path="registrar" element={<RegistrarCandidato />} />
              <Route path="candidatos" element={<CandidatosList />} />
              <Route path="votar" element={<Votar />} />
            </Routes>
          </Grid>
        </Box>
        <Notificaciones />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
