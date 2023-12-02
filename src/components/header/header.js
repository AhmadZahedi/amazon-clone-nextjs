'use client'
// Next
import Image from 'next/image';

// Icons
import ShopIcon from '@/icons/shop.svg';

// Ant Design
import {Avatar, Badge, Space} from 'antd';

// Components
import SearchBar from "@/components/header/searchBar.comopnent";
import UserActions from "@/components/header/userActions.component";
import MenuComponent from "@/components/header/menu.component";

export default function Header() {
    return (
        <header className="w-100 py-6 px-24">
            <div className="flex gap-10 items-center justify-between">
                <button className="font-bold text-4xl font-integralCf">SHOP.CO</button>

                <div className="w-[380px]">
                    <MenuComponent />
                </div>

                <SearchBar />

                <div className="flex gap-3.5">
                    <Space size={24}>
                        <button>
                            <Badge count={1}>
                                <Avatar
                                    shape="square"
                                    style={{backgroundColor: 'transparent'}}
                                    icon={<Image src={ShopIcon} alt="shop icon"/>}/>
                            </Badge>
                        </button>
                    </Space>

                    <UserActions />
                </div>
            </div>
        </header>
    );
}