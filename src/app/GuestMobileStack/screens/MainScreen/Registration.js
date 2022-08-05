import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import  { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const RegistrationComponent = ({history}) => {
    const [isLoading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const submitRef = useRef();

    const submitForm = (values) => {


        console.log(values);
    }

    return (
        <Form 
            form={form}
            name="rest_form" 
            layout="vertical" 
            onFinish={submitForm}
            autoComplete="off"
        >
            <Fragment>
                <Form.Item name="first_name" rules={[{ required: true, message: '' }]}>
                    <Input name="first_name" placeholder="First name"/>
                </Form.Item>
                <Form.Item name="last_name" rules={[{ required: true, message: '' }]}>
                    <Input name="last_name" placeholder="Last name"/>
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, message: '' }]}>
                    <Input name="email" placeholder="Email"/>
                </Form.Item>
                <Form.Item name="phone" rules={[{ required: true, message: '' }]}>
                    <Input name="phone" placeholder="Phone number"/>
                </Form.Item>
               
                <TreamsAndConditions>
                    <Text>By clicking log in you agree our</Text>
                    <TextTream>Terms & Conditions</TextTream>
                </TreamsAndConditions>
                <Button htmlType="submit" block>Sign up</Button>
            </Fragment>
        </Form>
    )
}
const TreamsAndConditions = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;

`
const Text = styled.div `
    color: #fff;
    opacity: .6;
`

const TextTream = styled.div `
    color: #fff;
    margin-left: 5px;
`
export default RegistrationComponent;