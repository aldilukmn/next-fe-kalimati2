import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './(public)/components/nav/nav-bar';
import Time from './(public)/components/time';
import Footer from './(public)/components/footer';


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
        <div className='relative overflow-x-hidden max-w-[1450px] mx-auto'>
          <Time/>
          <Navbar/>
          <main className='h-dvh'>
            {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
