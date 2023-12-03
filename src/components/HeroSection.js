// Next
import Image from "next/image";

// images
import heroImage from '../../public/assets/images/hero-image.png';

export default function HeroSection() {

    return (
        <div className='flex w-100 h-[853px] sm:h-[663px] bg-[#F2F0F1] '>
            <div className='sm:w-1/2 sm:pt-[100px] sm:pl-[100px]'>
                <div>
                    <div className='font-integralCf text-[64px] font-bold leading-[64px]'>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </div>

                    <div className='text-base text-slate-950/40 mt-8'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your
                        individuality and cater to your sense of style.
                    </div>
                </div>

                <button
                    type='button'
                    className='text-base font-normal text-white bg-slate-950 py-4 px-14 rounded-full mt-8'
                >
                    Shop Now
                </button>

                <div className='flex mt-8'>
                    <div>
                        <div className='text-[40px] font-bold'>200+</div>
                        <div className='text-base text-slate-950/40'>International Brands</div>
                    </div>
                    <div className="mx-8 w-[1px] h-100 bg-slate-950/20"></div>
                    <div>
                        <div className='text-[40px] font-bold'>2,000+</div>
                        <div className='text-base text-slate-950/40'>High-Quality Products</div>
                    </div>
                    <div className="mx-8 w-[1px] h-100 bg-slate-950/20"></div>
                    <div>
                        <div className='text-[40px] font-bold'>30,000+</div>
                        <div className='text-base text-slate-950/40'>Happy Customers</div>
                    </div>
                </div>
            </div>

            <div className="sm:w-1/2 relative pl-1">
                <div>
                    <Image
                        src={heroImage}
                        alt="hero-image"
                        width={636}
                        height={636}
                        loading='lazy'
                        draggable='false'
                    />
                </div>

                <svg
                    width="104"
                    height="104"
                    className='absolute top-[85px] right-[80px]'
                >
                    <path fill="#000" d="M52 0c1.765 27.955 24.045 50.235 52 52-27.955 1.765-50.235 24.045-52 52-1.765-27.955-24.045-50.235-52-52 27.955-1.765 50.235-24.045 52-52Z"/>
                </svg>

                <svg
                    width="56"
                    height="56"
                    className='absolute top-[295px] left-[20px]'
                >
                    <path fill="#000" d="M28 0c.95 15.053 12.947 27.05 28 28-15.053.95-27.05 12.947-28 28-.95-15.053-12.947-27.05-28-28 15.053-.95 27.05-12.947 28-28Z"/>
                </svg>
            </div>
        </div>
    )
}