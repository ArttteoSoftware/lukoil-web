import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { isEmpty, find, map, filter } from 'lodash';
import { CartListContext } from 'context/CartListContext';
import PlusSmall from 'assets/media/plus-small.svg';
import CartPlus from 'assets/media/cartPlus.svg';
import CartMinus from 'assets/media/cartMinus.svg';
const ProductsMobile = ({onRenderItems}) => {
    const { cartList, updateCartList } = useContext(CartListContext);
    const [selected, setSelected] = useState(null);
    const [updateState, setUpdateState] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [data, setData] = useState([{
        id: 1,
        name: 'Super ecto',
        standart_price: 3.60,
        discount: 0.10
    },{
        id: 2,
        name: 'Super ecto 100',
        standart_price: 3.60,
        discount: 0.10
    },{
        id: 3,
        name: 'Premium avangard',
        standart_price: 3.60,
        discount: 0.10
    },{
        id: 4,
        name: 'Euro Regular',
        standart_price: 3.60,
        discount: 0.10
    },{
        id: 5,
        name: 'Euro Diesel',
        standart_price: 3.60,
        discount: 0.10
    }]);


    const addItem = async (x) => {
        const findItem = find(cartList, (v) => v.id === x.id);
        if (findItem) {

        }
        else {
            x.quantity = 1;
            updateCartList([...cartList, x]);
        }
    }

    const showRangeButton = (item) => {
        const findItem = find(cartList, (x) => x.id === item.id);
        return !isEmpty(findItem) ? true : false;
    
    }

    const renderValue = (item) => {
        const findItem = find(cartList, (x) => x.id === item.id);
        return findItem.quantity;
    }

    const minus = (selected) => {
        if (selected.quantity !== 1) {

            cartList.forEach((v) => {
                if (selected.id === v.id) { 
                    v.quantity--;
                }
            });
            updateCartList(cartList);
            onRenderItems(Math.random());
        }
        else {
            const newList = filter(cartList, (x) => x.id !== selected.id); 
            updateCartList(newList);
            onRenderItems(Math.random());
        }
        
        setUpdateState(Math.random());
    }

    const plus = (selected) => {
        cartList.forEach((v) => {
            if (selected.id === v.id) { 
                v.quantity++;
            }
        });
        
        updateCartList(cartList);
        onRenderItems(Math.random());
        setUpdateState(Math.random());
    }

    const onChangeQuantity = (item, quantity) => {
        cartList.forEach((v) => {
            if (item.id === v.id) { 
                v.quantity = Number(quantity);
            }
        });
        updateCartList(cartList);
        onRenderItems(Math.random());
        setUpdateState(Math.random());
    }

    return (
        <ProductsContainer>
            <ShopItemContainer>
                <ShopTableFlexBody>
                    {
                        map(data, (x, index) => {
                            return (
                                <TdBodyItem key={x.id}>
                                    <Blockf>
                                        <Item>{x.name}</Item>
                                        <Blockf style={{marginTop: 14}}>
                                        {!showRangeButton(x) ? 
                                            <AddCartButton onClick={() => addItem(x)}>
                                                <PlusSmallImg src={PlusSmall}/><ViewButtonText style={{marginLeft: 10}}>Add to cart</ViewButtonText>
                                            </AddCartButton>
                                            :
                                            <MinusPlusContainer>
                                                <MinusButton onClick={() => minus(x)}>
                                                    <img src={CartMinus}/>
                                                </MinusButton>
                                                <Input placeholder='0.00L' value={renderValue(x)} onChange={(e) => onChangeQuantity(x, e.target.value)} defaultValue={renderValue(x)}/>
                                                <PlusButton onClick={() => plus(x)}>
                                                    <img src={CartPlus}/>
                                                </PlusButton>
                                            </MinusPlusContainer>
                                        }
                                        </Blockf>
                                    </Blockf>
                                    <Blockf style={{marginLeft: 32, flex: 1}}>
                                        <ThItem style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <div style={{opacity: .6}}>Standard price</div>
                                            <div style={{color: '#000', fontWeight: '700'}}>{x.standart_price.toFixed(2)}GEL</div>
                                        </ThItem>
                                        <ThItem style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <div style={{opacity: .6}}>Discount (t/Litre)</div>
                                            <div style={{color: '#000', fontWeight: '700'}}>{x.discount.toFixed(2)}GEL</div>
                                        </ThItem>
                                        <ThItem style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                            <div style={{opacity: .6}}>Your price</div>
                                            <div style={{color: '#DB2B36', fontWeight: '700'}}>{(x.standart_price-x.discount).toFixed(2)}GEL</div>
                                        </ThItem>
                                    </Blockf>
                                </TdBodyItem>
                            )
                        })
                    }
                </ShopTableFlexBody>
            </ShopItemContainer>
        </ProductsContainer>
    )
}
const Blockf = styled.div `

`
const MinusPlusContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`
const MinusButton = styled.div `
    width: 36px;
    height: 36px;
    background: #000000;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > img {
        width: 30px;
    }
`
const Input = styled.input `
    width: 60px;
    height: 36px;
    border-left: 0px;
    border-right: 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    text-align: center;
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
    width: 36px;
    height: 36px;
    background: #000000;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    & > img {
        width: 30px;
    }
`
const ProductsContainer = styled.div `
    padding: 0px 16px;
`
const ShopItemContainer = styled.div `
    margin-top: 30px;
`
const ThItem = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    letter-spacing: -0.28px;
    color: #000000;
`
const ShopTableFlexBody = styled.div `

    margin-top: 10px;
`
const TdBodyItem = styled.div `
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px 16px;
    margin-bottom: 15px;
    &:last-child {
        margin-bottom: 0px;
    }
`
const Item = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    color: #000000;
    /* &:first-child {
        font-weight: 700;
    }
    &:last-child {
        color: #DB2B36;
    } */
`
const AddCartButton = styled.div `
    width: 132px;
    height: 36px;
    background-color: #DB2B36;
    color: #fff;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const PlusSmallImg = styled.img `
`
const ViewButtonText = styled.div `
`
export default ProductsMobile;