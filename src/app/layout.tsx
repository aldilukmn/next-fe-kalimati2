import type { Metadata } from "next";
import "./globals.css";
import Navbar from './(public)/components/nav/nav-bar';
import Footer from './(public)/components/footer';
import { ToastContainer } from 'react-toastify'
import ReduxProvider from './redux-provider';
import ClientToast from './client-toast';
import TimeDynamic from './(public)/components/time';

export const metadata: Metadata = {
  title: "UPTD SDN 2 KALIMATI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg" />
      </head>
      <body>
        <ReduxProvider>
          <div className='relative overflow-x-hidden max-w-[1450px] mx-auto'>
            <TimeDynamic/>
            <Navbar/>
            <main className='min-h-screen'>
              {children}
            </main>
            <Footer />
            <ToastContainer />
            <ClientToast/>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
