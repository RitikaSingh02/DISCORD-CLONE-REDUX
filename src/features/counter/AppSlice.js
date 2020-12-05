import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channel_id:null,
    channel_name:null,
  },
  reducers: {
    setChannelId:(state,action) => {
      state.channel_id=action.payload.channelId;
      state.channel_name=action.payload.channelName;  
      // state.user=action.payload;
    },
  }
});

export const setChannelId = state => state.user.user;

export const selectChannelId = state => state.app.channel_id;
export const selectChannelName = state => state.app.channel_name;

export default appSlice.reducer;
