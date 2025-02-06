'use client';
import { formatDate } from '@/app/utils/format-date';
import { formatTime } from '@/app/utils/format-time';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    setIsVisible(true)
    return () => clearInterval(interval);
  }, []);

  if (!currentTime) return null;

  return (
    <>
      <section className={`bg-black text-white text-center px-5 py-2 rounded-b-md lg:text-base md:text-sm w-fit text-xs mx-auto fixed z-50 inset-x-0 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-65' : '-translate-y-full opacity-0'}`}>
        <h1>{formatTime(currentTime)}</h1>
        <h2>{formatDate(currentTime)}</h2>
      </section>
    </>
  )
}

const TimeDynamic = dynamic(() => Promise.resolve(Time), { ssr: false });

export default TimeDynamic;