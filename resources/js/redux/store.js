import { configureStore } from "@reduxjs/toolkit";
import ChannelSlice from "./ChannelSlice";
import CommentSlice from "./CommentSlice";


const store = configureStore({
  reducer: {
    comment: CommentSlice.reducer,
    channel: ChannelSlice.reducer,
  }
});

export default store;