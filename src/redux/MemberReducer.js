import { createSlice } from '@reduxjs/toolkit';

const MemberSlice = createSlice({
  name: 'member',
  initialState: {
    value: {
      email: '',
      pw: '',
      nick: '',
      phone: '',
      isad: 'N',
    },
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.value = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.value = {
        email: '',
        pw: '',
        nick: '',
        phone: '',
        isad: 'N',
      };
    },
  },
});

export const memberAction = MemberSlice.actions;
export const memberReducer = MemberSlice.reducer;
