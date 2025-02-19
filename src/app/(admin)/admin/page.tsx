'use client'
import { setKeyToken } from '@/app/config/redux/action/key-token.action';
import { RootState } from '@/app/config/redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.keyTokenReducer.keyToken);
  useEffect(() => {
    fetch('/api/auth')
    .then((res) => res.json())
    .then((data) => {
      dispatch(setKeyToken(data.tokenValue));
    })
    .catch(() => {
      dispatch(setKeyToken(''));
    });
  }, [dispatch]);
  return (
    <>
      <h1>{userToken}</h1>
    </>
  )
}