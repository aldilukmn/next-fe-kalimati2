import { combineReducers } from "@reduxjs/toolkit";
import { toastReducer } from './toast-reducer';
import { isLoadingReducer } from './loading-reducer';
import { keyTokenReducer } from './key-token.reducer';

export const reducer = combineReducers({
  isLoadingReducer,
  toastReducer,
  keyTokenReducer
})