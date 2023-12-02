import {Avatar, Badge, Button, DatePicker, Form, Input, InputNumber, Modal, Select, Space} from "antd";
import Image from "next/image";
import Profile from "@/icons/profile.svg";
import {useState} from "react";

export default function UserActions() {
    const {TextArea} = Input;

    const [userModal, setUserModal] = useState(false);

    const [loading, setLoading] = useState(false);


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
        <>
            <Space size={24}>
                <button onClick={showUserModal}>
                    <Badge dot>
                        <Avatar
                            shape="square"
                            style={{backgroundColor: 'transparent'}}
                            icon={<Image src={Profile} alt="profile icon"/>}/>
                    </Badge>
                </button>
            </Space>

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
                    labelCol={{flex: '110px'}}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{flex: 1}}
                    colon={false}
                    style={{maxWidth: 600}}
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

                    <Form.Item label="Normal label" name="username" rules={[{required: true}]}>
                        <Input/>
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
        </>
    );
}