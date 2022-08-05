import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { LoggedMobileheader, CartMobile, SmallCard } from 'components';
import { CartListContext } from 'context/CartListContext';
import { isEmpty } from 'lodash';

const CartScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);
    const [list, setList] = useState(0);
    const { cartList, updateCartList } = useContext(CartListContext);
    return (
       <ContainerBlock>
            <LoggedMobileheader bigBg title="Products" description="Page description" noLogo showCard/>
            <SmallCard/>
            <CartMobile onRenderItems={(e) => {
                setList(e);
            }}/>
            {!isEmpty(cartList) && <div style={{height: 150}}></div>}
       </ContainerBlock>
    )
}
const View = styled.div `

`
const ContainerBlock = styled.div `
    height: 100vh;
`;
export default CartScreen;