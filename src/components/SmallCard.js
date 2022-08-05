import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import GassPamp from 'assets/media/gas-pump.svg';
const SmallCard = () => {
    

    return (
        <CardBlock>
            <SmallCardV>
                <View>
                <CardTitle>Card name</CardTitle>
                <CardName>My card</CardName>
                </View>
                <img style={{opacity: .7}} src={GassPamp}/>
            </SmallCardV>
            
        </CardBlock>       
    )
}
const View = styled.div `

`
const SmallCardV = styled.div `
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    background-color: #DB2B36;
    width: 155px;
    height: 88px;
    padding: 13px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const CardTitle = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 9px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #FFFFFF;
    opacity: 0.6;
`
const CardName = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: -0.2800000011920929px;
    text-align: left;
    color: #FFFFFF;
    opacity: 0.8;
`
const CardBlock = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -42px;
`
export default SmallCard;