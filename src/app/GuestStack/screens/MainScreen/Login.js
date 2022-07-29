import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import  { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'

const LoginComponent = ({history}) => {
    const [isLoading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const submitRef = useRef();

    const submitForm = async (values) => {
        console.log(1);
        await localStorage.setItem("user", "login11");
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
                <Form.Item name="email" rules={[{ required: true, message: '' }]}>
                    <Input name="dicount_price" placeholder="Phone/Email"/>
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '' }]}>
                    <Input name="password" type="password" placeholder="Password"/>
                </Form.Item>
                <PasswordRecover>
                    <Link to="/">Reset password</Link>
                </PasswordRecover>
                <TreamsAndConditions>
                    <Text>By clicking log in you agree our</Text>
                    <TextTream>Terms & Conditions</TextTream>
                </TreamsAndConditions>
                <Button htmlType="submit" block>Sign in</Button>
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


const PasswordRecover = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: -15px;
    margin-bottom: 30px;
    & > a {
        color: #be2b34;
        font-family: 'Plus Jakarta Sans';
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        letter-spacing: 0em;
    }
    & > a:hover {
        text-decoration: underline;
    }
`
const PasswordRecoverLink = styled.div `

`
export default LoginComponent;