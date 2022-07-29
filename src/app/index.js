
import React, { useState, useEffect, useContext } from 'react';
import { isEmpty } from 'lodash';
import GuestStack from './GuestStack'
import LoggedStack from './LoggedStack'
import Cookies from 'js-cookie'

const RootScreens = () => {
    const [user, setUser] = useState(true);
    useEffect(() => {
        getMainData();
    }, []);


    const getMainData = async () => {

    }


    return (
        user ? <LoggedStack/> : <GuestStack/>
    )
}
export default RootScreens;