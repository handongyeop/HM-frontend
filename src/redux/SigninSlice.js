import { createSlice } from '@reduxjs/toolkit';

const SigninSlice = createSlice({
  name: 'signin',
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state, action) => {
      state.value = !state.value;
    },
  },
});

export const signinAction = SigninSlice.actions;
export const signinReducer = SigninSlice.reducer;
