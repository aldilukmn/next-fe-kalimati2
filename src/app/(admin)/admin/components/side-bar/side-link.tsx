import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';import Diversity3Icon from '@mui/icons-material/Diversity3';

interface SideLinkType {
  to: string
  name: string
}

const Sidelink: React.FC<SideLinkType> = ({
  to,
  name
}) => {
  const pathname = usePathname();
  const getIcon = () => {
    if (to === '/admin') return <DonutSmallIcon />;
    if (to === '/admin/gtk') return <PeopleAltIcon />;
    if (to === '/admin/siswa') return <Diversity3Icon />;
    return null;
  };
  return (
    <>
      <Link className={`px-10 tracking-widest py-3 hover:bg-blue_paisley hover:text-snow_day cursor-pointer duration-150 font-semibold flex items-center ${pathname === to ? 'bg-blue_paisley text-snow_day' : ''}`} href={to}>
        <span className='mr-3'>
          {getIcon()}
        </span>
          {name}
      </Link>
    </>
  )
}

export default Sidelink