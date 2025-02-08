'use client';
import { useDispatch, useSelector } from "react-redux";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AppDispatch, RootState } from '@/app/config/redux/store';
import { setIsLoading } from '@/app/config/redux/action/loading.action';
import { firstCapitalizeWord } from '@/app/utils/first-cap';
import showToast from '@/app/helpers/show-toast';
import { setToastMessage } from '@/app/config/redux/action/toast-action';

export default function Login() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector((state: RootState) => state.isLoadingReducer.isLoading);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch(name) {
      case 'username':
        setUsername(value);
      break;
      case 'password':
        setPassword(value);
      break;
    }
  }

  const handleSeePassword = () => {
    setSeePassword(prev => !prev)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    dispatch(setIsLoading(true));
    try {
      e.preventDefault();
      // const payload: UserType = {
      //   username,
      //   password
      // };
      // const response = await LoginUser.doLogin(payload);

      // if (response.status.code === 400) {
      //   throw new Error(response.status.message);
      // }
      dispatch(setToastMessage('response.status.message'));
      // const isToken = response.result as string;
      // localStorage.setItem('access_token', isToken);
      router.push('/dashboard');
    } catch (e) {
      if (e instanceof Error) {
        showToast(firstCapitalizeWord(e.message), 'error')
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="2xl:mx-[28rem] xl:mx-[25rem] md:mx-[10rem] mt-28 mb-28 px-10 text-center pt-6 pb-10 rounded-xl relative border-blue_paisley bg-serenity_sky border-2 shadow-lg">
        <h4 className="text-blue_paisley font-semibold md:text-xl tracking-widest">Selamat Datang</h4>
        <h3 className="text-blue_paisley font-semibold md:text-xl tracking-widest">Login sebagai Admin</h3>
        <span className=" w-full border-blue_paisley border-b-2 block mt-3 mb-5 rounded-full"></span>
        <label htmlFor="username" className="block text-start mb-2 font-semibold tracking-widest text-blue_paisley border-b border-b-blue_paisley w-fit">Username</label>
        <input placeholder="Username" id="username" name="username" type="text" className="w-full p-2 tracking-widest rounded-md outline-none border-2 transition-all duration-300 border-serenity_sky focus:border-blue_paisley mb-5 text-black" onChange={handleOnChange} value={username}></input>
        <label htmlFor="password" className="block text-start mb-2 font-semibold tracking-widest text-blue_paisley border-b border-b-blue_paisley w-fit ">Password</label>
        <div className="relative">
          <input placeholder="Password" id="password" name="password" type={`${seePassword ? 'text' : 'password'}`} className="w-full p-2 tracking-widest rounded-md outline-blue-soft mb-8 text-black outline-none border-2 transition-all duration-300 border-serenity_sky focus:border-blue_paisley" onChange={handleOnChange} value={password}>
          </input>
          <span onClick={handleSeePassword} className="text-blue_paisley">
            {
              seePassword ? (
                <RemoveRedEyeIcon className="absolute right-3 top-2 cursor-pointer" />
              ) : (
                <VisibilityOffIcon className="absolute right-3 top-2 cursor-pointer" />
              )
            }
          </span>
        </div>
        <button className={`w-full text-blue_paisley py-2 rounded-md tracking-widest font-bold hover:bg-blue_paisley hover:text-snow_day ${!username || !password || isLoading ? 'cursor-not-allowed bg-gray-200' : 'bg-snow_day'}`} disabled={!username || !password || isLoading}>{isLoading ? 'Loading ...' : 'Login'}</button>
      </form>
    </>
  );
}