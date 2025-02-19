'use client'
import SkeletonLoader from '@/app/(public)/components/skeleton-loader/skeleton-skeleton-loader';
import { setKeyToken } from '@/app/config/redux/action/key-token.action';
import { setIsLoading } from '@/app/config/redux/action/loading.action';
import { RootState } from '@/app/config/redux/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function GTK() {
  const userToken = useSelector((state: RootState) => state.keyTokenReducer.keyToken);
  const isLoading = useSelector((state: RootState) => state.isLoadingReducer.isLoading);
  const dispatch = useDispatch();
useEffect(() => {
  const fetchAuth = async () => {
    dispatch(setIsLoading(true));
    try {
      const res = await fetch('/api/auth');
      const data = await res.json();
      dispatch(setKeyToken(data.tokenValue));
    } catch (error) {
      dispatch(setKeyToken(''));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  fetchAuth();
}, []);
  return (
    <>
      {
        isLoading ? (
          <div className='w-dvw mt-20'>
            <SkeletonLoader/>
            <SkeletonLoader/>
          </div>
        ): (
          <h1>{userToken}</h1>
        )
      }
    </>
  )
}