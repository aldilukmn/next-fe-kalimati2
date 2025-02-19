import { PayloadAction } from "@reduxjs/toolkit";

interface KeyTokenType {
  keyToken: string;
}

const initState: KeyTokenType = {
  keyToken: ''
};

export const keyTokenReducer = (
  state = initState,
  action: PayloadAction<string>
) => {
  if (action.type === 'SET_KEY_TOKEN') {
    return {
      ...state,
      keyToken: action.payload
    };
  };
  return state;
};