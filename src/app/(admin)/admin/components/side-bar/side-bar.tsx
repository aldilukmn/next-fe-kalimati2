'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sidelink from './side-link';
export default function SideBar() {
  const pathname = usePathname();
  return (
    <>
      <ul className='bg-serenity_sky flex flex-col'>
        <Sidelink to='/admin' name='Dashboard'/>
        <Sidelink to='/admin/gtk' name='GTK'/>
        <Sidelink to='/admin/siswa' name='Siswa'/>
      </ul>
    </>
  )
}