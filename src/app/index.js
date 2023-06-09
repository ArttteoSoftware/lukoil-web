
import React, { useState, useEffect, useContext } from 'react';
import { isEmpty } from 'lodash';
import GuestStack from './GuestStack'
import LoggedStack from './LoggedStack'
import GuestMobileStack from './GuestMobileStack'
import LoggedMobileStack from './LoggedMobileStack'
import Cookies from 'js-cookie'

const RootScreens = () => {
    const [user, setUser] = useState(true);
    const [winSize, setWinSize] = useState()
    useEffect(() => {
        getMainData();
    }, []);


    useEffect(() => {
        function handleResize() {
            setWinSize(window.outerWidth);
        }
        window.addEventListener('resize', handleResize)
    });
    
    const getMainData = async () => {
        setWinSize(window.outerWidth);
    }

    if (winSize > 1023) {
        return (
            user ? <LoggedStack/> : <GuestStack/>
        )
    }
    else {
        return user ? <LoggedMobileStack/> : <GuestMobileStack/>
    }
}
export default RootScreens;