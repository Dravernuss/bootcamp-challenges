import { createSlice } from '@reduxjs/toolkit';

const notificacionesSlice = createSlice({
  name: 'notificaciones',
  initialState: {
    id: 0,
    mensaje: '',
    severity: 'success',
  },
  reducers: {
    crearNotificacion: (state, { payload: notificacion }) => {
      state.id = Date.now();
      state.mensaje = notificacion.mensaje;
      state.severity = notificacion.severity;
    },
  },
});

export const { crearNotificacion } = notificacionesSlice.actions;

export default notificacionesSlice.reducer;
