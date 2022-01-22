import { Alert, Snackbar } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { NotificacionesContext } from "../utils/NotificacionesContext";

export const Notificaciones = () => {
  const { notificacion } = useContext(NotificacionesContext);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(!!notificacion);
  }, [notificacion]);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Alert severity="success" sx={{ width: "100%" }}>
        {notificacion}
      </Alert>
    </Snackbar>
  );
};
