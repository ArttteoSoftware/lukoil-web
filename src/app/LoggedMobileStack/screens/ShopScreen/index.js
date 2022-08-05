import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { LoggedMobileheader, ProductsMobile, SmallCard } from 'components';



const ShopScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);
    const [list, setList] = useState(0);
    return (
       <ContainerBlock>
            <LoggedMobileheader bigBg title="Products" description="Page description" noLogo showCard/>
            <SmallCard/>
            <ProductsMobile onRenderItems={(e) => {
                setList(e);
            }}/>
            <div style={{height: 80}}></div>
       </ContainerBlock>
    )
}
const View = styled.div `

`
const ContainerBlock = styled.div `
    height: 100vh;
`;
export default ShopScreen;