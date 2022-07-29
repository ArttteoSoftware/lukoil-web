import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import LogoSvg from 'assets/media/Logo.svg';
import HomeIcon from 'assets/media/home.svg';
import GasStation from 'assets/media/gas-station.svg';
import ProfileIcon from 'assets/media/profile.svg';

const LeftNavigationMenu = ({history}) => {
    

    return (
        <LeftMenuWidth>
            <LogoArea>
                <Img src={LogoSvg}/>
                <View>
                    <TextM>Lukoil</TextM>
                    <TextS>georgia</TextS>
                </View>
            </LogoArea>
            <MeniuContainer>
                <MenuLi>
                    <img src={HomeIcon}/>
                    <NavLink to="/">Home</NavLink>
                </MenuLi>
                <MenuLi>
                    <img src={GasStation}/>
                    <NavLink to="/shop">Shop</NavLink>
                </MenuLi>
                <MenuLi>
                    <img src={ProfileIcon}/>
                    <NavLink to="/profile">Profile</NavLink>
                </MenuLi>
            </MeniuContainer>
        </LeftMenuWidth>
    )
}
const LeftMenuWidth = styled.div `
    width: 280px;
    background-color: #000;
    height: 100vh;
    position: fixed;
    color: #fff;
    
`
const LogoArea = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 30px 30px 0px 30px;
    margin-bottom: 30px;
`
const Img = styled.img `
    width: 40px;
    height: 40px;
`
const View = styled.div `
    margin-left: 18px;
`
const TextM = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.28px;
`
const TextS = styled.div `
    font-family: 'Plus Jakarta Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #fff;
    opacity: .6;
`
const MeniuContainer = styled.ul `
    list-style: none;
    margin: 0px;
    padding: 0px;
`
const MenuLi = styled.li `
    display: block;
    border-right: 2px solid #000;
    padding: 0px 30px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    & > img {
        opacity: .6;
    }
    & > a {
        display: block;
        padding: 20px 0px;
        color: #fff;
        opacity: .6;
        margin-left: 15px;
        width: 100%;
    }
    &:hover {
        background-color: #0A0A0A;
        border-right: 2px solid #DB2B36;
        & > a {
            display: block;
            padding: 20px 0px;
            color: #fff;
            opacity: 1;
        }
        & > img {
            opacity: 1;
        }
    }
`
export default LeftNavigationMenu;