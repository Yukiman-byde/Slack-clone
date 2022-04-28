import { createSlice } from "@reduxjs/toolkit";

export const ChannelSlice = createSlice({
  name: "channel",
  initialState: {
    roomName: null,
  },
  reducers: {
    showRoom:(state, action) => {
        state.roomName = action.payload.roomName;
    },
  }
});

export const ChannelAction = ChannelSlice.actions;

export default ChannelSlice;