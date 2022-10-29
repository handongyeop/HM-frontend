import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
  name: 'signin',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});
export const signinAction = SigninSlice.actions;
export const signinReducer = SigninSlice.reducer;

const SignupSlice = createSlice({
  name: 'signup',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const signupAction = SignupSlice.actions;
export const signupReducer = SignupSlice.reducer;
