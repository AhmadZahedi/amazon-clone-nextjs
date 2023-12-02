import {DownOutlined} from "@ant-design/icons";
import {useState} from "react";
import {Menu} from "antd";

export default function MenuComponent() {
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
        <Menu
            mode="horizontal"
            items={items}
            selectedKeys={[currentMenu]}
            onClick={changeMenu}
        />
    );
}