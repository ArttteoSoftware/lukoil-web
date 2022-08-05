import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomeIcon from 'assets/media/bottomBar/Home';
import ShopIcon from 'assets/media/bottomBar/Shop';
import CartIcon from 'assets/media/bottomBar/Cart';
import ProfileIcon from 'assets/media/bottomBar/Profile';
const BottomNavigationTabBar = ({showRightSide}) => {
    

    return (
        <BottomNavigationTabBarContainer>
            <Item>
                <HomeIcon color="#000"/>
                <Text>Home</Text>
            </Item>
            <Item>
                <ShopIcon color="#000"/>
                <Text>Shop</Text>
            </Item>
            <Item>
                <CartIcon color="#000"/>
                <Text>Cart</Text>
            </Item>
            <Item>
                <ProfileIcon color="#000"/>
                <Text>Profile</Text>
            </Item>
        </BottomNavigationTabBarContainer>        
    )
}
const BottomNavigationTabBarContainer = styled.div `
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    height: 62px;
    margin-top: 20px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const Text = styled.div `
    font-size: 12px;
    margin-top: 2px;
`
const Item = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1
`
export default BottomNavigationTabBar;