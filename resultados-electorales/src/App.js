import { Elecciones } from "./pages/Elecciones";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CandidatosProvider } from "./utils/CandidatosContext";
import { Navbar } from "./components/NavBar";
import { Box } from "@mui/material";
import { RegistrarCandidato } from "./pages/RegistrarCandidato";
import "./_App.css";
import { NotificacionesProvider } from "./utils/NotificacionesContext";
import { Notificaciones } from "./components/Notificaciones";
import { Provider } from "react-redux";
import store from "./redux";
import { PropuestasCandidatos } from "./pages/PropuestasCandidatos";

function App() {
  return (
    <Provider store={store}>
      <NotificacionesProvider>
        <BrowserRouter>
          <Navbar />
          <Box
            sx={{
              margin: 2,
            }}
          >
            <Routes>
              <Route index element={<Elecciones />}></Route>
              <Route path="registrar" element={<RegistrarCandidato />} />
              <Route path="candidatos" element={<PropuestasCandidatos />} />
            </Routes>
          </Box>
          <Notificaciones />
        </BrowserRouter>
      </NotificacionesProvider>
    </Provider>
  );
}

export default App;
