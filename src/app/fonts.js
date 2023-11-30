import localFont from 'next/font/local';

export const integralCf = localFont({
    src: [
        {
            path: '../../public/assets/fonts/integral-cf/IntegralCFRegular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/integral-cf/IntegralCFMediumRegular.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/integral-cf/IntegralCFBoldRegular.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/integral-cf/IntegralCFExtraBoldRegular.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-integralCf',
    display: 'swap'
});
export const satoshi = localFont({
    src: [
        {
            path: '../../public/assets/fonts/satoshi/Satoshi-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/assets/fonts/satoshi/Satoshi-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/assets/fonts/satoshi/Satoshi-Bold.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/assets/fonts/satoshi/Satoshi-Black.woff2',
            weight: '900',
            style: 'normal',
        }
    ],
    variable: '--font-satoshi',
    display: 'swap'
});