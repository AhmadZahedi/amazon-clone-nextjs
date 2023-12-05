import React, { useState } from 'react';
import {AppstoreOutlined, DownOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import {Button, Drawer, Menu} from 'antd';
function createObjectFrom(label, key, type, children, icon) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    createObjectFrom('Shop', 'shop', null, [
        createObjectFrom('Men Clothes', 'men_clothes', 'group', [
            createObjectFrom('Jeans', 'men_jeans'),
            createObjectFrom('Shirts', 'men_shirts')
        ]),
        createObjectFrom('Women Clothes', 'women_clothes', 'group', [
            createObjectFrom('Jeans', 'women_jeans'),
            createObjectFrom('Shirts', 'women_shirts')
        ])
    ]),
    createObjectFrom('On Sale', 'on_sale'),
    createObjectFrom('New Arrivals', 'new_arrivals'),
    createObjectFrom('Brands', 'brands')
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
export default function MobileMenu() {
    const [openKeys, setOpenKeys] = useState(['sub1']);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <div className="cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 -1 20 20">
                    <path
                        fill="#000"
                        fillRule="evenodd"
                        d="M19 8H1a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2Zm0 8H1a1 1 0 0 0 0 2h18a1 1 0 1 0 0-2ZM1 2h18a1 1 0 1 0 0-2H1a1 1 0 0 0 0 2Z"
                    />
                </svg>
            </div>
            <div className={showMenu ? 'block' : 'hidden'}>
                <Drawer
                    placement="left"
                    onClose={() => setShowMenu(false)}
                    open={showMenu}
                >
                    <Menu
                        mode="inline"
                        items={items}
                        openKeys={openKeys}
                        onOpenChange={onOpenChange}
                        style={{
                            width: 256,
                        }}
                    />
                </Drawer>

            </div>
        </>
    );
}