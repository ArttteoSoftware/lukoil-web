import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'assets/media/bottomBar/Home';
import ShopIcon from 'assets/media/bottomBar/Shop';
import CartIcon from 'assets/media/bottomBar/Cart';
import ProfileIcon from 'assets/media/bottomBar/Profile';
const BottomNavigationTabBar = ({showRightSide}) => {
    

    return (
        <BottomNavigationTabBarContainer>
            <NavLink to="/">
                <HomeIcon color="#000"/>
                <Text>Home</Text>
            </NavLink>
            <NavLink to="/shop">
                <ShopIcon color="#000"/>
                <Text>Shop</Text>
            </NavLink>
            <NavLink to="/cart">
                <CartIcon color="#000"/>
                <Text>Cart</Text>
            </NavLink>
            <NavLink  to="/profile">
                <ProfileIcon color="#000"/>
                <Text>Profile</Text>
            </NavLink>
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
    & > a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex: 1;
        color: #000;
    }
`
const Text = styled.div `
    font-size: 12px;
    margin-top: 2px;
`
export default BottomNavigationTabBar;