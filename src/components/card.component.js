import {Card, Tag} from "antd";
import Image from "next/image";
import {StarFilled, StarOutlined} from "@ant-design/icons";
import ShopIcon from '@/icons/shop.svg';
import {yellow} from "next/dist/lib/picocolors";
export default function CardComponent({width, alt, product}) {
    function getRatingStars() {
        return [...Array(5).fill(product.rating)].map((rating, index) => {
            if (index < rating) return <StarFilled key={index} style={{color: "#FFC633"}}/>
            else return <StarOutlined key={index} style={{color: "#FFC633"}}/>
        });
    }

    return (
        <Card
            hoverable
            style={{width: width}}
            cover={<Image src={ShopIcon} alt={alt}/>}
        >
            <div className="flex flex-col gap-3">
                <div className="text-xl font-bold text-black">{product.name}</div>
                <div className="flex gap-2">{getRatingStars()}</div>
                <div className="flex gap-2.5">
                    <div className="font-bold text-base">{product.price * (100 - product.discountPercent) / 100}</div>
                    <div className="line-through text-gray-400">${product.price}</div>
                    <div className="bg-red-100 border-0 px-3.5 rounded-full w-fit">
                        <span className="text-red-600">%{product.discountPercent}</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}