'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navlink from './nav-link';
import { useScreenSize } from '@/app/utils/screen-size';
import { redirect, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setKeyToken } from '@/app/config/redux/action/key-token.action';
import { Dropdown } from 'flowbite-react';
import handleUser from '@/app/utils/user/handle-login';
import { setToastMessage } from '@/app/config/redux/action/toast-action';
import { HiLogout } from "react-icons/hi";
import { jwtDecode } from 'jwt-decode';
import { RootState } from '@/app/config/redux/store';
import { RoleType } from '@/app/utils/response/default-response';
import { firstCapitalizeWord } from '@/app/utils/first-cap';

export default function Navbar() {
  const { width } = useScreenSize();
  const [isNav, setIsNav] = useState<boolean>(false);
  const [decodedToken, setDecodedToken] = useState<RoleType>();
  const pathName = usePathname();
  const isAdmin: boolean = pathName.startsWith('/admin');
  const dispatch = useDispatch();
  const userToken = useSelector((state: RootState) => state.keyTokenReducer.keyToken);
  useEffect(() => {
    if (userToken) {
      try {
        const splitBearer = userToken.split(' ')[1];
        const decoded: RoleType = jwtDecode(splitBearer);
        setDecodedToken(decoded);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    }
  }, [userToken]);
  const handleClick = () => {
    setIsNav(!isNav)
  }
  const handleLogout = async () => {
    const user = await handleUser.doLogout();
    dispatch(setToastMessage(user?.status.message!));
    dispatch(setKeyToken(''));
    redirect('/login');
  };
  return (
    <div>
      <section className='flex justify-between lg:px-16 px-10 border-b-2 py-2 mt-10 font-semibold items-center border-b-serenity_sky'>
        <figure>
          <Link href={'/'}>
            <img src='https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg' width={75} alt='logo' />
          </Link>
        </figure>
        <div className='flex gap-10 tracking-widest items-center'>
          {
            width > 768 ? (
            <>
              {
                !isAdmin ? (
                  <>
                    <Navlink to='/' children='Beranda' needHover={true}/>
                    <Navlink to='/profil' children='Profil' needHover={true}/>
                    <Navlink to='/gtk' children='GTK' needHover={true}/>
                    <Navlink to='/tentang' children='Tentang' needHover={true} />
                    <Navlink to={'/login'} children={'Login'} className='text-snow_day px-5 py-2 rounded-md' needHover={false}/>

                  </>
                  ) : (
                  <>
                    <Dropdown label={`${decodedToken?.role ? firstCapitalizeWord(decodedToken.role) : 'Loading ..'}`}>
                      <Dropdown.Item icon={HiLogout} onClick={handleLogout}>Logout</Dropdown.Item>
                    </Dropdown>    
                  </>
                ) 
              }
            </>
            ) : (
            <div onClick={handleClick}>
              <>
                {/* <Icon icon='material-symbols:menu-rounded' className='cursor-pointer' width='36' /> */}
                <div className={`flex flex-col absolute bg-black text-white bottom-0 -top-10 pr-32 pl-8 pt-24 z-50 gap-10 transition-all duration-300 ease-in-out ${isNav ? 'right-0' : '-right-96'}`}>
                  <Navlink to='/' children='Beranda' needHover={true}/>
                  <Navlink to='/profil' children='Profil' needHover={true} className='w-12'/>
                  <Navlink to='/gtk' children='GTK' className='w-9' needHover={true}/>
                  <Navlink to='/tentang' children='Tentang' needHover={true}/>
                  <Navlink to='/login' children='Login' needHover={false} />
                </div>
                <span className={`bg-black absolute left-0 right-0 -top-10 bottom-0 z-40 ${isNav ? 'opacity-50' : 'hidden'}`}></span>
              </>
            </div>
            )
          }
        </div>
      </section>
    </div>
  );
}

{/* <Navlink to={`${expTokenUser && isAdmin || keyToken && isAdmin || keyToken && !isAdmin ? '/admin' : '/login'}`} children={`${expTokenUser && isAdmin || keyToken && isAdmin || keyToken && !isAdmin ? 'Dashboard' : 'Login'}`} className='text-snow_day px-5 py-2 rounded-md' needHover={false}/> */}