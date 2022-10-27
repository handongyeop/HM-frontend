import { createSlice } from '@reduxjs/toolkit';

const SignupSlice = createSlice({
  name: 'signup',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const signupAction = SignupSlice.actions;
export const signupReducer = SignupSlice.reducer;
