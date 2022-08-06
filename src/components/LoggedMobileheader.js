import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserImageSvg from 'assets/media/user.svg';
import LogoSvg from 'assets/media/Logo.svg';
import ArrowLeftIcon from 'assets/media/arrow-left-white.svg';
import { useHistory } from "react-router-dom";

const LoggedMobileheader = ({title, description, backButton, noLogo, bigBg, showCard}) => {
    let history = useHistory();

    return (
        <LoggedHeaderContainer bigBg={bigBg ? 155 : 125}>
            <Fragment>
            {backButton ? <View onClick={() => history.goBack()}><img src={ArrowLeftIcon} /></View> : !noLogo ? <LogoBlock><img src={LogoSvg}/></LogoBlock> : <View/>}
            </Fragment>
            {
            title ? 
                <CenterBlock>
                    <NameText>{title}</NameText>
                    <TextDate>{description}</TextDate>
                </CenterBlock>
            :
                <CenterBlock>
                    <TextDate>28 June, 2022</TextDate>
                    <NameText>Welcome, Irakli</NameText>
                </CenterBlock>
            
            }
            {!noLogo ? <UserBlock><img src={UserImageSvg}/></UserBlock> : <View/>}
        </LoggedHeaderContainer>        
    )
}
const View = styled.div ``;
const LoggedHeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000;
    height: ${props => props.bigBg+'px'};
    padding-left: 22px;
    padding-right: 22px;
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

export default LoggedMobileheader;