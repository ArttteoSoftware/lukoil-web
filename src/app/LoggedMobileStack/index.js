import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { BottomNavigationTabBar } from 'components'

import {
    MainScreen,
    ShopScreen,
    CartScreen,
    ProfileScreen,
    CardsScreen,
    PersonalinfoScreen,
    ChangePasswordScreen
} from './screens'
const LoggedStack = (props) => {

    
    return (
        <Router>
            <StwitchContainer>
                <Switch>
                    <Route exact={true} path='/' component={MainScreen}/>
                    <Route exact={true} path='/home' component={MainScreen}/>
                    <Route exact={true} path='/shop' component={ShopScreen}/>
                    <Route exact={true} path='/cart' component={CartScreen}/>
                    <Route exact={true} path='/profile' component={ProfileScreen}/>
                    <Route exact={true} path='/profile/cards' component={CardsScreen}/>
                    <Route exact={true} path='/profile/personal-info' component={PersonalinfoScreen}/>
                    <Route exact={true} path='/profile/change-password' component={ChangePasswordScreen}/>
                </Switch>
            </StwitchContainer>
            <BottomNavigationTabBar/>
        </Router>
    )

}
const StwitchContainer = styled.div `

`
const Content = styled.div `
    flex: 1;
    padding-left: 280px;
`
export default LoggedStack;