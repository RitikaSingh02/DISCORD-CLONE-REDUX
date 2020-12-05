import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  reducers: {
    login:(state,action) => {
      state.user=action.payload;
      // Payload is what is keyed ( the key value pairs ) in your actions and
      //  passed around between reducers in your redux application.
    },
    logout: (state) => {
      state.user= null;
    }
  }
});

export const { login,logout } = userSlice.actions;

export const selectUser = state => state.user.user;

export default userSlice.reducer;
