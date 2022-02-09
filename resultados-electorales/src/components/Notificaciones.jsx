import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const Notificaciones = () => {
  const notificacion = useSelector(state => state.notificaciones);
  const { mensaje, severity } = notificacion;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!mensaje);
  }, [mensaje, notificacion]);

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={2000}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <Alert severity={severity} sx={{ width: '100%' }}>
        {mensaje}
      </Alert>
    </Snackbar>
  );
};
