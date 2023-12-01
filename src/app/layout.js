// Styles
import { satoshi, integralCf } from "@/app/fonts";
import '@/styles/globals.scss';

// Components
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

export const metadata = {
    title: 'Shop.co',
    description: 'A shop website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${satoshi.className} ${integralCf.variable}`} >
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    )
};
