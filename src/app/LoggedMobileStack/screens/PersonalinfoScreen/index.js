import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { MainOrders, MainBalance, LoggedHeader, FloatLable } from 'components';
import  { Button, Form, Input } from 'antd';
import ArrowLeftIcon from 'assets/media/arrow-left.svg';
import EditSvgIcon from 'assets/media/edit-2.svg';

const PersonalinfoScreen = ({history}) => {
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
            <Layout>
                <LoggedHeader showRightSide/>
                <ProfileContainer>
                    <View onClick={() => history.goBack()}>
                        <img src={ArrowLeftIcon} style={{marginRight: 10}}/>
                        Personal info
                    </View>
                    <Form 
                        form={form}
                        name="personal_info_form" 
                        layout="vertical" 
                        onFinish={submitForm}
                        autoComplete="off"
                        className="ymgf-dssd"
                        initialValues={{
                            'frist_name': "Irakli",
                            'last_name': 'Rekhviashvili',
                            'email': 'example@gmail.com',
                            'phone': '+995 512345678'
                        }}
                    >
                    <FormView>
                        <Form.Item name="frist_name">
                            <FloatLable disabled label={'Frist name'}/>
                        </Form.Item>
                        <Form.Item name="last_name">
                            <FloatLable disabled label={'Last name'}/>
                        </Form.Item>
                        <Form.Item name="email">
                            <FloatLable editable label={'Email'}/>
                        </Form.Item>
                        <Form.Item name="phone">
                            <FloatLable editable label={'Phone'}/>
                        </Form.Item>
                        <MenuBlock onClick={() => history.push('/profile/change-password')}>
                            <Block>
                                <LabelText>Password</LabelText>
                                <BlockText>**********</BlockText>
                            </Block>
                            <EditIcon src={EditSvgIcon}/>
                        </MenuBlock>
                    </FormView>
                    <FormButton>
                        <Button type="primary" htmlType="submit" block>Save changes</Button>
                    </FormButton>
                    </Form>
                </ProfileContainer>
            </Layout>
            <RightPanel>
                <MainBalance/>
                <MainOrders/>
            </RightPanel>
       </ContainerBlock>
    )
}
const MenuBlock = styled.a `
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 12px;
    padding: 23px 31px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000000;
    margin-bottom: 10px;
    &:hover {
        color: #000000;
        text-decoration: none;
    }
`
const Block = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`
const BlockText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000;
`
const EditIcon = styled.img `

`
const LabelText = styled.div `
        font-family:'Plus Jakarta Sans';
        font-size: 12px;
        font-weight: 400;
        line-height: 15px;
        letter-spacing: -0.2800000011920929px;
        text-align: left;
        color: #000;
        opacity: .6;
        margin-left: -8px;
`
const FormView = styled.div `
    
`
const FormButton = styled.div `
    position: absolute;
    bottom: 32px;
    width: 93%;
`
const ProfileContainer = styled.div `
    margin-top: 20px;
`
const View = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
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
    display: flex;
    height: 100vh;
`
const Layout = styled.div `
    flex: 1;
    padding: 32px;
    position: relative;
`
const RightPanel = styled.div `
    padding: 32px;
    width: 406px;
    background-color: #F2F2F2;
`
export default PersonalinfoScreen;