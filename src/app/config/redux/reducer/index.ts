import { combineReducers } from "@reduxjs/toolkit";
import { toastReducer } from './toast-reducer';
import { isLoadingReducer } from './loading-reducer';

export const reducer = combineReducers({
  isLoadingReducer,
  toastReducer
})