import { configureStore } from '@reduxjs/toolkit';
import { memberReducer } from './redux/MemberReducer';
import { signinReducer, signupReducer } from './redux/SignReducer';

const store = configureStore({
  reducer: {
    signup: signupReducer,
    signin: signinReducer,
    login: memberReducer,
  },
});

export default store;
