import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Button, Select } from 'antd';
import CartPlus from 'assets/media/cartPlus.svg';
import CartMinus from 'assets/media/cartMinus.svg';

const Transfer = () => {
    const [showContent, setShowContent] = useState(false);
    const [liters, setLiters] = useState('')
    const { Option } = Select;

    const handleChange = (values) => {
        console.log(values);

    }

    const minus = () => {
        if (liters === 1) {
            setLiters('');
            return false;
        }
        if (liters === 0 || liters === '') {
            return false;
        }
        setLiters((old) => old-1);
    }

    const plus = () => {
        setLiters((old) => Number(old)+1);
    }

    return (
        <TransferContainer>
            <View>
                <LabelText>Choose product</LabelText>
                <Select placeholder="Account" size="large" style={{width: '100%'}} onChange={handleChange}>
                    <Option value="main">Main account</Option>
                    <Option value="lucy">Lucy account</Option>
                    <Option value="Yiminghe">yiminghe account</Option>
                </Select>
            </View>
            <View style={{marginTop: 16}}>
                <LabelText>Liters</LabelText>
                <MinusPlusContainer>
                    <MinusButton onClick={() => minus()}>
                        <img src={CartMinus}/>
                    </MinusButton>
                    <Input placeholder='0.00L' value={liters} onChange={(e) => setLiters(e.target.value)} defaultValue={liters}/>
                    <PlusButton onClick={() => plus()}>
                        <img src={CartPlus}/>
                    </PlusButton>
                </MinusPlusContainer>
            </View>
            <View style={{marginTop: 16}}>
                <LabelText>From</LabelText>
                <Select placeholder="Account" size="large" style={{width: '100%'}} onChange={handleChange}>
                    <Option value="main">Main account</Option>
                    <Option value="lucy">Lucy account</Option>
                    <Option value="Yiminghe">yiminghe account</Option>
                </Select>
            </View>
            <View style={{marginTop: 16}}>
                <LabelText>To</LabelText>
                <Select placeholder="Account" size="large" style={{width: '100%'}} onChange={handleChange}>
                    <Option value="main">Main account</Option>
                    <Option value="lucy">Lucy account</Option>
                    <Option value="Yiminghe">yiminghe account</Option>
                </Select>
            </View>
            <Button style={{marginTop: 20}} onClick={() => console.log(1)} block>Transfer</Button>
        </TransferContainer>
    )
}
const TransferContainer = styled.div `
    margin-top: 20px;
`
const View = styled.div `

`
const LabelText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    margin-bottom: 8px;

`
const MinusPlusContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
const MinusButton = styled.div `
    width: 60px;
    height: 46px;
    background: #000000;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > img {
        width: 30px;
    }
`
const Input = styled.input `
    width: 100%;
    height: 46px;
    border-left: 0px;
    border-right: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: transparent;
    &:hover {
        outline: none;
    }
    &:active {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`
const PlusButton = styled.div `
    width: 60px;
    height: 46px;
    background: #000000;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > img {
        width: 30px;
    }
`
export default Transfer;