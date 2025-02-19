import { PayloadAction } from "@reduxjs/toolkit";

interface ToastState {
  message: string | null;
}

const initState: ToastState = {
  message: null
}

export const toastReducer = (
  state = initState,
  action: PayloadAction<string | null>
) => {
  if (action.type === 'SET_TOAST_MESSAGE') {
    return {
      ...state,
      message: action.payload
    };
  };
  return state;
};