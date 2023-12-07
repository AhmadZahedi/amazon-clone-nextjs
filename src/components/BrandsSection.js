
//images
import versaceLogoImage from '../../public/assets/images/brand-versace.png';
import calvinKleinLogoImage from '../../public/assets/images/brand-calvin-klein.png';
import gucciLogoImage from '../../public/assets/images/brand-gucci.png';
import zaraLogoImage from '../../public/assets/images/brand-zara.png';
import pradaLogoImage from '../../public/assets/images/brand-prada.png';
import Image from "next/image";

export default function BrandsSection() {

    return(
        <div className='bg-black px-4 sm:px-[100px] py-10 overflow-hidden'>
            <div className='w-100 sm:h-[32px] flex flex-wrap max-md:gap-4 justify-between'>
                <Image
                    src={versaceLogoImage}
                    alt='logo'
                    width={166}
                    draggable='false'
                    loading='lazy'
                />

                <Image
                    src={zaraLogoImage}
                    alt='logo'
                    width={91}
                    draggable='false'
                    loading='lazy'
                />

                <Image
                    src={gucciLogoImage}
                    alt='logo'
                    width={156}
                    draggable='false'
                    loading='lazy'
                />

                <Image
                    src={pradaLogoImage}
                    alt='logo'
                    width={194}
                    draggable='false'
                    loading='lazy'
                />

                <Image
                    src={calvinKleinLogoImage}
                    alt='logo'
                    width={206}
                    draggable='false'
                    loading='lazy'
                />
            </div>
        </div>
    );
}