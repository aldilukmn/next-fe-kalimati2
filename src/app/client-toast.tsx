'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './config/redux/store';
import { setToastMessage } from './config/redux/action/toast-action';
import showToast from '@/app/helpers/show-toast';

export default function ClientToast() {
  const dispatch = useDispatch<AppDispatch>();
  const toastMessage = useSelector((state: RootState) => state.toastReducer.message);

  useEffect(() => {
    if (toastMessage) {
      showToast(toastMessage, 'success');
      dispatch(setToastMessage(null));
    }
  }, [toastMessage, dispatch]);

  return null;
}
