import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    comment: [],
  },
  reducers: {
    addChat: (state, action) => {
      state.comment.splice(10,1)
      state.comment.unshift( ...action.payload) 
    },
  },
});

export const { addChat } = chatSlice.actions;
export default chatSlice.reducer;
