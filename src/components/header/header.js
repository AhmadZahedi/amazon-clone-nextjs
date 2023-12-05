'use client'
// Next
import Image from 'next/image';

// Icons
import ShopIcon from '@/icons/shop.svg';

// Ant Design
import {Avatar, Badge, Space} from 'antd';

// Components
import SearchBar from "@/components/header/searchBar.component";
import UserActions from "@/components/header/userActions.component";
import MenuComponent from "@/components/header/menu.component";
import Link from "next/link";
import MobileMenu from "@/components/header/mobileMenu.component";

export default function Header() {
    return (
        <header className="container py-6 px-2">
            <div className="flex gap-10 items-center justify-between">
                <div className="block md:hidden">
                    <MobileMenu />
                </div>

                <button className="font-bold text-4xl font-integralCf">SHOP.CO</button>

                <div className="w-[380px] md:block hidden">
                    <MenuComponent />
                </div>

                <SearchBar />

                <div className="flex gap-3.5">
                    <Space size={24}>
                        <button>
                            <Badge count={1}>
                                <Link href="/cart">
                                    <Avatar
                                        shape="square"
                                        style={{backgroundColor: 'transparent'}}
                                        icon={<Image src={ShopIcon} alt="shop icon"/>}
                                    />
                                </Link>
                            </Badge>
                        </button>
                    </Space>

                    <UserActions />
                </div>
            </div>
        </header>
    );
}