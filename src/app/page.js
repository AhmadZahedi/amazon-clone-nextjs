import CardComponent from "@/components/card.component";

export default function Main() {
    const product = {
        name: 'Skinny Fit Jeans',
        rating: 3,
        price: 260,
        discountPercent: 20
    };

    return (
        <>
            <div className='text-[64px]'>
                FIND CLOTHES THAT MATCHES YOUR STYLE
                <div className="flex w-full h-[500px] justify-center items-center">
                    <CardComponent width={250} alt={'alt'} product={product}/>
                    <CardComponent width={250} alt={'alt'} product={product}/>
                </div>
            </div>
        </>
    );
}