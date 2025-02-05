import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './(public)/components/nav/nav-bar';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "UPTD SDN 2 KALIMATI",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="https://res.cloudinary.com/dhtfq9yw8/image/upload/v1717920310/uptd%20sdn%202%20kalimati/svg/vapqm0latukpxjjawzfu.svg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>UPTD SDN 2 KALIMATI</title>
      </head>
      <body>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
