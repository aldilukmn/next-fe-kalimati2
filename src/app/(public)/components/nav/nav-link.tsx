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
    <Link href={to} className={`relative group duration-300 ${className} ${isActive && !needHover ? 'bg-blue_paisley' : !needHover ? 'bg-serenity_sky hover:bg-blue_paisley' : 'text-blue_paisley'}`}>
      {children}
      {
        needHover ? (<span className={`absolute left-0 -bottom-1 w-0 transition-all duration-300 h-1 rounded ${isActive ? 'w-full' : 'group-hover:w-full hover:bg-red-400'} ${width > 768 ? 'bg-blue_paisley' : 'text-red-50'}`}></span>) : (
        null)
        }
    </Link>
  )
}

export default Navlink