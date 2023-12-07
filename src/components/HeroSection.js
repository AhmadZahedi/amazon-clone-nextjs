// Next
import Image from "next/image";

// images
import heroImage from '../../public/assets/images/hero-image.png';
import heroMobileImage from '../../public/assets/images/hero-image-mobile.png';

export default function HeroSection() {

    return (
        <div className='flex flex-col sm:flex-row w-100 h-[853px] sm:h-[663px] bg-[#F2F0F1]'>
            <div className='w-100 sm:w-1/2 pt-10 px-4 sm:pt-10 sm:pl-10 md:pt-14 md:pl-14 lg:pt-[100px] lg:pl-[100px]'>
                <div>
                    <div className='font-integralCf font-bold xl:text-[64px] xl:leading-[64px] lg:text-5xl text-4xl'>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </div>

                    <div className='mt-5 sm:mt-8 text-base text-slate-950/40'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your
                        individuality and cater to your sense of style.
                    </div>
                </div>

                <button
                    type='button'
                    className='max-sm:w-full py-4 px-14 mt-6 sm:mt-8 text-base font-normal text-white bg-slate-950 rounded-full'
                >
                    Shop Now
                </button>

                <div className='flex max-sm:flex-wrap mt-5 sm:mt-8 justify-center content-center'>
                    <div>
                        <div className='text-2xl lg:text-3xl xl:text-[40px] font-bold'>200+</div>
                        <div className='text-xs md:text-base text-slate-950/40'>International Brands</div>
                    </div>
                    <div className="mx-8 w-[1px] h-100 bg-slate-950/20"></div>
                    <div>
                        <div className='text-2xl lg:text-3xl xl:text-[40px] font-bold'>2,000+</div>
                        <div className='text-xs md:text-base text-slate-950/40'>High-Quality Products</div>
                    </div>
                    <div className="hidden min-[400px]:block mx-8">
                        <div className='hidden min-[500px]:block'></div>
                    </div>
                    <div className='max-[400px]:mt-3'>
                        <div className='text-2xl lg:text-3xl xl:text-[40px] font-bold'>30,000+</div>
                        <div className='text-xs md:text-base text-slate-950/40'>Happy Customers</div>
                    </div>
                </div>
            </div>

            <div className="relative w-full h-full sm:w-1/2 overflow-hidden">
                <div className="absolute w-full h-full right-0 bottom-0">
                    <Image
                        src={ heroImage }
                        alt="hero-image"
                        fill
                        loading='lazy'
                        draggable='false'
                        className='hidden min-[391px]:block object-contain'
                    />

                    <Image
                        src={ heroMobileImage }
                        alt="hero-image"
                        fill
                        loading='lazy'
                        draggable='false'
                        className='min-[391px]:hidden'
                    />
                </div>

                <svg
                    width="104"
                    height="104"
                    className='hidden sm:block absolute top-[55px] right-[60px]'
                >
                    <path fill="#000"
                          d="M52 0c1.765 27.955 24.045 50.235 52 52-27.955 1.765-50.235 24.045-52 52-1.765-27.955-24.045-50.235-52-52 27.955-1.765 50.235-24.045 52-52Z"/>
                </svg>

                <svg
                    width="76"
                    height="76"
                    className='sm:hidden absolute top-[15px] right-[25px]'
                >
                    <path fill="#000"
                          d="M38 0c1.29 20.429 17.571 36.71 38 38-20.429 1.29-36.71 17.571-38 38-1.29-20.429-17.571-36.71-38-38 20.429-1.29 36.71-17.571 38-38Z"/>
                </svg>

                <svg
                    width="56"
                    height="56"
                    className='hidden sm:block absolute top-[295px] left-[100px]'
                >
                    <path fill="#000"
                          d="M28 0c.95 15.053 12.947 27.05 28 28-15.053.95-27.05 12.947-28 28-.95-15.053-12.947-27.05-28-28 15.053-.95 27.05-12.947 28-28Z"/>
                </svg>

                <svg
                    width="44"
                    height="44"
                    className='sm:hidden absolute top-[100px] left-[30px]'
                >
                    <path fill="#000"
                          d="M22 0c.747 11.827 10.173 21.253 22 22-11.827.747-21.253 10.173-22 22-.747-11.827-10.173-21.253-22-22 11.827-.747 21.253-10.173 22-22Z"/>
                </svg>

            </div>
        </div>
    )
}