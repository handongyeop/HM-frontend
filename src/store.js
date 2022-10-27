import { configureStore } from '@reduxjs/toolkit';
import { signinReducer } from './redux/SigninSlice';
import { signupReducer } from './redux/SignupSlice';

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
  },
});

export default store;
