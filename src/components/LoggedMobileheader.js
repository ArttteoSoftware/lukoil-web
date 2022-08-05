import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserImageSvg from 'assets/media/user.svg';
import LogoSvg from 'assets/media/Logo.svg';

const LoggedHeader = ({showRightSide}) => {
    

    return (
        <LoggedHeaderContainer>
            <LogoBlock><img src={LogoSvg}/></LogoBlock>
            <CenterBlock>
                <TextDate>28 June, 2022</TextDate>
                <NameText>Welcome, Irakli</NameText>
            </CenterBlock>
            <UserBlock><img src={UserImageSvg}/></UserBlock>
        </LoggedHeaderContainer>        
    )
}
const View = styled.div ``;
const LoggedHeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    height: 125px;
    padding-left: 16px;
    padding-right: 16px;
`
const UserBlock = styled.div `
    & > img {
        width: 40px;
        height: 40px;
    }
`
const CenterBlock = styled.div `
`
const LogoBlock = styled.div `
    & > img {
        width: 40px;
        height: 40px;
    }
`
const TextDate = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: -0.2800000011920929px;
    text-align: center;
    color: #FFFFFF;
    opacity: 0.6;
`

const NameText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: -0.2800000011920929px;
    text-align: center;
    color: #FFFFFF;
`

export default LoggedHeader;