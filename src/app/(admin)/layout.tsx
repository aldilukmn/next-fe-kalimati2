'use client'
import React from 'react';
import SideBar from './admin/components/side-bar/side-bar';

export default function LayoutAdmin({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className='flex min-h-screen'>
        <SideBar/>
        <main className='flex'>
          {children}
        </main>
      </div>
    </>
  );
}
