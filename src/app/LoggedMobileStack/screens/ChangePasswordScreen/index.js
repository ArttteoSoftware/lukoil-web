import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { LoggedMobileheader, FloatLable } from 'components';
import  { Button, Form, Input } from 'antd';
import ArrowLeftIcon from 'assets/media/arrow-left.svg';
import EditSvgIcon from 'assets/media/edit-2.svg';

const ChangePasswordScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        console.log(form.getFieldValue('email'));
    }, [form]);

    const submitForm = (values) => {
        console.log(values);
    }

    return (
       <ContainerBlock>
            <LoggedMobileheader backButton/>
            <ProfileContainer>
                <View>
                    Change password
                </View>
                <Form 
                    form={form}
                    name="personal_info_form" 
                    layout="vertical" 
                    onFinish={submitForm}
                    autoComplete="off"
                    className="ymgf-dssd"
                    initialValues={{
                        'current_password': "",
                        'new_password': '',
                        'repeat_password': ''
                    }}
                >
                <FormView>
                    <Form.Item name="current_password">
                        <FloatLable label={'Current password'} isActivedColor/>
                    </Form.Item>
                    <Form.Item name="new_password">
                        <FloatLable label={'New password'} isActivedColor/>
                    </Form.Item>
                    <Form.Item name="repeat_password">
                        <FloatLable label={'Confirm new password'} isActivedColor/>
                    </Form.Item>
                </FormView>
                <FormButton>
                    <Button type="primary" htmlType="submit" block>Save changes</Button>
                </FormButton>
                </Form>
            </ProfileContainer>
       </ContainerBlock>
    )
}
const FormView = styled.div `
    
`
const FormButton = styled.div `
    @media only screen and (min-width:300px) and (max-width:768px){
        bottom: 70px;
    }
    position: absolute;
    bottom: 32px;
    width: 93%;
`
const ProfileContainer = styled.div `
    margin: 20px 16px 0px 16px;
`
const View = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 16px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
`
const ContainerBlock = styled.div `
    height: 100vh;
`
export default ChangePasswordScreen;