import { screenSize } from '@/utils/screen-size';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from "react";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  needHover: boolean
}

const Navlink: React.FC<NavLinkProps> = ({to, children, className, needHover}) => {
  const location = usePathname();
  const isActive: boolean = location === to;
  const { width } = screenSize();
  return (
    <Link href={to} className={`relative group ${className} ${isActive && !needHover ? 'bg-blue' : !needHover ? 'bg-blue-soft' : null}`}>
      {children}
      {
        needHover ? (<span className={`absolute left-0 -bottom-1 w-0 transition-all duration-300 h-1 rounded opacity-75 ${isActive ? 'w-full' : 'group-hover:w-full'} ${width > 768 ? 'bg-black' : 'bg-white'}`}></span>) : (
        null)
        }
    </Link>
  )
}

export default Navlink