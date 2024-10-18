import { createSlice } from "@reduxjs/toolkit";

const initialUiSlice = {
  cartVisible: false,
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: { initialUiSlice },
  reducers: {
    toggleCart: (state) => {
      state.cartVisible = !state.cartVisible;
    },
    showNotification: (state, action) => {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
