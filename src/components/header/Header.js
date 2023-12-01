'use client'

// Next
import Image from 'next/image';

// Icons
import SearchIcon from '@/icons/search.svg';
import ShopIcon from '@/icons/shop.svg';
import Profile from '@/icons/profile.svg';

// Ant Design
import {DownOutlined} from '@ant-design/icons';
import {Menu, Avatar, Badge, Space, Modal, Button, Form, Input, Select, DatePicker, InputNumber} from 'antd';
import {useState} from "react";

export default function Header() {
    const {TextArea} = Input;

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

    const [userModal, setUserModal] = useState(false);

    const [loading, setLoading] = useState(false);


    function changeMenu(e) {
        setCurrentMenu(e.key)
    }

    function showUserModal() {
        setUserModal(true);
    }

    function closeUserModal() {
        setUserModal(false);
    }

    function submitUserForm() {
        setLoading(true);
        setTimeout(() => {
            setUserModal(false);
            setLoading(false);
        }, 2000)
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


                <div className="bg-[#F0F0F0] px-4 py-3 rounded-full flex gap-3 grow">
                    <Image
                        src={SearchIcon}
                        alt="search icon"
                    />

                    <input
                        className="w-full border-none bg-transparent focus:outline-none"
                        type="text"
                        placeholder="Search for products..."
                    />
                </div>

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

                        <button onClick={showUserModal}>
                            <Badge dot>
                                <Avatar
                                    shape="square"
                                    style={{backgroundColor: 'transparent'}}
                                    icon={<Image src={Profile} alt="profile icon"/>}/>
                            </Badge>
                        </button>
                    </Space>
                </div>
            </div>

            <Modal
                title="User Modal"
                open={userModal}
                footer={[
                    <Button
                        key="cancel"
                        className="bg-gray-600 px-6 py-1 rounded-full text-white me-2"
                        loading={loading}
                        onClick={closeUserModal}
                    >
                        cancel
                    </Button>,
                    <Button
                        form="myForm"
                        key="submit"
                        className="bg-black px-6 py-1 rounded-full text-white"
                        loading={loading}
                        onClick={submitUserForm}
                        htmlType="submit"
                    >
                        submit
                    </Button>
                ]}
                onOk={submitUserForm}
                onCancel={closeUserModal}
            >
                <Form
                    id="myForm"
                    name="wrap"
                    labelCol={{ flex: '110px' }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    colon={false}
                    style={{ maxWidth: 600 }}
                >
                    <Form.Item
                        label="Name"
                        required
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                    >
                        <Select>
                            <Select.Option value="Man">
                                Man
                            </Select.Option>
                            <Select.Option value="Woman">
                                Woman
                            </Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Birthday"
                    >
                        <DatePicker/>
                    </Form.Item>

                    <Form.Item
                        label="Age"
                    >
                        <InputNumber/>
                    </Form.Item>

                    <Form.Item label="Normal label" name="username" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="How yout find us?"
                    >
                        <TextArea/>
                    </Form.Item>

                    <Form.Item label=" ">
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </header>
    );
}