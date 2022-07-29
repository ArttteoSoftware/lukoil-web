import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Button } from 'antd'
import { Link } from 'react-router-dom';
import EmptySvg from 'assets/media/empty.svg';
import { map, isEmpty, filter } from 'lodash';
import { CartListContext } from 'context/CartListContext';
const MainOrders = ({refresh}) => {

    const { cartList, updateCartList } = useContext(CartListContext);

    useEffect(() => {
    }, [refresh]);

    const onClearCart = () => {
        updateCartList([]);
    }

    const removeItem = (item) => {
        const rr = filter(cartList, (x) => { return x.id !== item.id});
        updateCartList(rr);
    }
    return (
        <CartContainer>
            <Header>
                <HeaderText>Cart</HeaderText>
                <ViewAll onClick={() => onClearCart()}>Clear</ViewAll>
            </Header>
            <Block>
                <CartItems windowHeight={window.outerHeight}>
                    {
                        !isEmpty(cartList) ? 
                            map(cartList, (item, index) => {
                                return (
                                    <CartItem key={item.index}>
                                        <LeftBlock>
                                            <Texted>{item.name}</Texted>
                                            <ButtonRemove onClick={() => removeItem(item)}>Delete</ButtonRemove>
                                        </LeftBlock>
                                        <RightBlock>
                                            <RightBlockItems>
                                                <TextL>Standard price</TextL>
                                                <TextR>{item.standart_price.toFixed(2)} GEL</TextR>
                                            </RightBlockItems>
                                            <RightBlockItems>
                                                <TextL>Discount (t/Litre)</TextL>
                                                <TextR>{item.discount.toFixed(2)} GEL</TextR>
                                            </RightBlockItems>
                                            <RightBlockItems>
                                                <TextL>Your price</TextL>
                                                <TextR style={{color: '#DB2B36'}}>{((item.standart_price-item.discount)*item.quantity).toFixed(2)} GEL</TextR>
                                            </RightBlockItems>
                                        </RightBlock>
                                    </CartItem>
                                )
                            })
                        :
                        <EmptyContainer>
                            <div>
                                <img src={EmptySvg}/>
                                <EmptyCartText>Your cart is empty</EmptyCartText>
                            </div>
                            
                        </EmptyContainer>
                    }
                </CartItems>
                <Button block disabled={isEmpty(cartList)}>Checkout</Button>
            </Block>
        </CartContainer>
    )
}
const ButtonRemove = styled.div `
    width: 90px;
    height: 36px;
    top: 34px;
    background: #000000;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #fff;
    cursor: pointer;
`
const CartContainer = styled.div `
    margin-top: 37px;
`
const Header = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
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
const ViewAll = styled.div `
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
        cursor: pointer;
`
const Block = styled.div `
    display: flex;
    flex-direction: column;
    
`
const CartItems = styled.div `
    min-height: ${props => props.windowHeight > 986 ? '350px' : '310px'};
    max-height: ${props => props.windowHeight > 986 ? '350px' : '310px'};
    overflow: scroll;
    margin-top: 15px;
`
const CartItem = styled.div `
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 20px;
    height: 110px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &:last-child {
        margin-bottom: 10px;
    }

`
const EmptyContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`
const EmptyCartText = styled.div `
    margin-top: 10px;
    text-align: center;
    font-family: 'Plus Jakarta Sans';
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2800000011920929px;
    color: #000000;
    opacity: 0.6;
`
const LeftBlock = styled.div `
    position: relative;
`
const RightBlock = styled.div `
    
`
const RightBlockItems = styled.div `
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
`
const TextL = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000000;
    opacity: 0.6;
    width: 100px;
`
const TextR = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.2800000011920929px;
    text-align: right;
    color: #000000;
    width: 75px;
`

const Texted = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #000000;
`
export default MainOrders;