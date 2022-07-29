import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UserImageSvg from 'assets/media/user.svg';
import CardFrame from 'assets/media/cardFrame.svg';

const LoggedHeader = ({showRightSide}) => {
    

    return (
        <LoggedHeaderContainer>
            <LeftSide>
                <UserImage src={UserImageSvg}/>
                <View style={{marginLeft: 16, marginTop: 3}}>
                    <DateText>28 June, 2022</DateText>
                    <WelcomeUser>Welcome, Irakli</WelcomeUser>
                </View>
            </LeftSide>
            {showRightSide && <RightSide>
                <Link to="/"><CardChange src={CardFrame}/></Link>
            </RightSide>}
        </LoggedHeaderContainer>        
    )
}
const View = styled.div ``;
const LoggedHeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const DateText = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
    color: #000000;
    opacity: 0.6;
`
const WelcomeUser = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.28px;
    color: #000000;
`
const LeftSide = styled.div `
    display: flex;
`
const UserImage = styled.img `
    width: 48px;
    height: 48px;
`
const RightSide = styled.div `
    
`
const CardChange = styled.img `
    width: 48px;
    height: 48px;
`
export default LoggedHeader;