import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api";

const initialState = {};

export const loginAsync = createAsyncThunk("login", async (user) => {
  const response = await login(user);
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      const { token } = action.payload;
      state.token = token;
      state.loggued = true;

      localStorage.setItem("infoUser", JSON.stringify(action.payload));
    });
  },
});

export const selectUserLoggued = (state) => state.user.loggued;

export default userSlice.reducer;
