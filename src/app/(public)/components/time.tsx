'use client';
import { formatDate } from '@/utils/format-date';
import { formatTime } from '@/utils/format-time';
import { useEffect, useState } from 'react';

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    setTimeout(() => {
      setIsVisible(true)
    }, 50);
    
    return () => clearInterval(interval);
  }, [])

  return (
    <>
      <section className={`bg-black text-white text-center px-5 py-2 rounded-b-md lg:w-52 lg:text-base md:w-48 md:text-sm w-40 text-xs mx-auto fixed z-50 inset-x-0 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-65' : '-translate-y-full opacity-0'}`}>
        <h1>{formatTime(currentTime)}</h1>
        <h2>{formatDate(currentTime)}</h2>
      </section>
    </>
  )
}