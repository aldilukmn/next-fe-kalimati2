import { PayloadAction } from "@reduxjs/toolkit";

interface LoadingState {
  isLoading: boolean;
}

const initState: LoadingState = {
  isLoading: false
}

export const isLoadingReducer = (
  state = initState,
  action: PayloadAction<boolean>
) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.payload,
    };
  }
  return state;
};