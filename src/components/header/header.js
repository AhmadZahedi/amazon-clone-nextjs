'use client'
// Next
import Image from 'next/image';

// Icons
import ShopIcon from '@/icons/shop.svg';

// Ant Design
import {DownOutlined} from '@ant-design/icons';
import {Menu, Avatar, Badge, Space} from 'antd';

// React
import {useState} from "react";

// Components
import SearchBar from "@/components/header/searchBar";
import UserActions from "@/components/header/userActions";

export default function Header() {

    const items = [
        {
            label: 'Shop',
            key: 'shop',
            icon: <DownOutlined/>,
            children: [
                {
                    type: 'group',
                    label: 'Men Clothes',
                    children: [
                        {
                            label: 'Jeans',
                            key: 'men jeans'
                        },
                        {
                            label: 'Shirts',
                            key: 'men shirts'
                        }
                    ]
                },
                {
                    type: 'group',
                    label: 'Women Clothes',
                    children: [
                        {
                            label: 'Jeans',
                            key: 'women jeans'
                        },
                        {
                            label: 'Shirts',
                            key: 'women shirts'
                        }
                    ]
                }
            ]
        },
        {
            label: 'On Sale',
            key: 'on sale'
        },
        {
            label: 'New Arrivals',
            key: 'new arrivals'
        },
        {
            label: 'Brands',
            key: 'brands'
        }
    ];

    const [currentMenu, setCurrentMenu] = useState('men jeans');

    function changeMenu(e) {
        setCurrentMenu(e.key)
    }

    return (
        <header className="w-100 py-6 px-24">
            <div className="flex gap-10 items-center justify-between">
                <button className="font-bold text-4xl font-integralCf">SHOP.CO</button>

                <div className="w-[380px]">
                    <Menu
                        mode="horizontal"
                        items={items}
                        selectedKeys={[currentMenu]}
                        onClick={changeMenu}
                    />
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