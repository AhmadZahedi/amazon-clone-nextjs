"use client"

import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shop.co',
  description: 'A shop website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + 'mx-auto'}>
      <Header/>
      {children}
      <Footer />
      </body>
    </html>
  )
};
