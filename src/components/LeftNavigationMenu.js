import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import LogoSvg from 'assets/media/Logo.svg';
import HomeIcon from 'assets/media/home.svg';
import GasStation from 'assets/media/gas-station.svg';
import ProfileIcon from 'assets/media/profile.svg';

const LeftNavigationMenu = (props) => {



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
                    
                    <NavLink to="/home"><img src={HomeIcon}/> <span>Home</span></NavLink>
                </MenuLi>
                <MenuLi>
                    <NavLink to="/shop"><img src={GasStation}/> <span>Shop</span></NavLink>
                </MenuLi>
                <MenuLi>
                    <NavLink to="/profile"><img src={ProfileIcon}/> <span>Profile</span></NavLink>
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
    padding: 0px 0px;
    display: flex;
    align-items: center;
    & > a {
        transition: all 0.3s;
        display: block;
        padding: 20px 30px;
        color: #fff;
        opacity: .6;
        width: 100%;
        border-right: 2px solid #000;
        display: flex;
        align-items: center;
        & > img {
            opacity: .6;
            margin-right: 15px;
        }
    }
    & > a.active {
        border-right: 2px solid #DB2B36;
        opacity: 1;
        & > img {
                opacity: 1;
        }
    }
    &:hover {
        background-color: #0A0A0A;
        & > a {
            display: block;
            padding: 20px 30px;
            color: #fff;
            opacity: 1;
            border-right: 2px solid #DB2B36;
            display: flex;
            align-items: center;
            & > img {
                opacity: 1;
            }
        }

    }
`
export default LeftNavigationMenu;