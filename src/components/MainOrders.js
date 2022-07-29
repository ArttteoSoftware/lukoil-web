import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowLeft from 'assets/media/arrow-right.svg';


const MainOrders = ({history}) => {
    

    return (
        <MainOrderContainer>
            <Header>
                <HeaderText>Orders</HeaderText>
                <ViewAll><Link to="/">View all</Link></ViewAll>
            </Header>
            <OrderBlock>
                <BlockItem>
                    <ItemText>Dec 30, 2022</ItemText>
                    <ItemPriceContainer>
                        <ItemPrice>30.15GEL</ItemPrice>
                        <ItemIcon><img src={ArrowLeft}/></ItemIcon>
                    </ItemPriceContainer>
                </BlockItem>
                <BlockItem>
                    <ItemText>Dec 30, 2022</ItemText>
                    <ItemPriceContainer>
                        <ItemPrice>30.15GEL</ItemPrice>
                        <ItemIcon><img src={ArrowLeft}/></ItemIcon>
                    </ItemPriceContainer>
                </BlockItem>
                <BlockItem>
                    <ItemText>Dec 30, 2022</ItemText>
                    <ItemPriceContainer>
                        <ItemPrice>30.15GEL</ItemPrice>
                        <ItemIcon><img src={ArrowLeft}/></ItemIcon>
                    </ItemPriceContainer>
                </BlockItem>
                <BlockItem>
                    <ItemText>Dec 30, 2022</ItemText>
                    <ItemPriceContainer>
                        <ItemPrice>30.15GEL</ItemPrice>
                        <ItemIcon><img src={ArrowLeft}/></ItemIcon>
                    </ItemPriceContainer>
                </BlockItem>
            </OrderBlock>
        </MainOrderContainer>        
    )
}
const MainOrderContainer = styled.div `
    margin-top: 35px;
`
const Header = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ViewAll = styled.div `
    & > a {
        font-family: 'Plus Jakarta Sans';
        font-size: 14px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: -0.2800000011920929px;
        text-align: right;
        color: #000000;
        opacity: 0.6;
        display: block;
        padding-top: 6px;
    }
`
const HeaderText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000;
`
const OrderBlock = styled.div `
    margin-top: 20px;
`
const BlockItem = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 14px 13px 13px 13px;
    margin-bottom: 10px;
`
const ItemText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;

`
const ItemIcon = styled.div `
    margin-left: 10px;
`
const ItemPrice = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 14px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
`
const ItemPriceContainer = styled.div `
    display: flex;
`
export default MainOrders;