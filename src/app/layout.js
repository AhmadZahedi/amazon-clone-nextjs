import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Shop.co',
  description: 'A shop website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' container mx-auto'}>{children}</body>
    </html>
  )
};
