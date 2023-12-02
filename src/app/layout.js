// Styles
import { satoshi, integralCf } from "@/app/fonts";
import '@/styles/globals.scss';

// Components
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";

// Lib
import StyledComponentsRegistry from "@/lib/AntdRegistry";

export const metadata = {
    title: 'Shop.co',
    description: 'A shop website',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${satoshi.className} ${integralCf.variable}`}>
        <StyledComponentsRegistry>
            <Header/>
            {children}
            <Footer/>
        </StyledComponentsRegistry>
        </body>
        </html>
    )
};
