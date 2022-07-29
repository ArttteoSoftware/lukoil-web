import * as React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import  { LeftNavigationMenu } from 'components'

import {
    MainScreen,
    ShopScreen,
    ProfileScreen,
    CardsScreen,
    PersonalinfoScreen,
    ChangePasswordScreen
} from './screens'
const LoggedStack = (props) => {

    
    return (
        <Router>
            <Container>
                <LeftNavigationMenu/>
            <Content>
                <Switch>
                    <Route exact={true} path='/' component={MainScreen}/>
                    <Route exact={true} path='/home' component={MainScreen}/>
                    <Route exact={true} path='/shop' component={ShopScreen}/>
                    <Route exact={true} path='/profile' component={ProfileScreen}/>
                    <Route exact={true} path='/profile/cards' component={CardsScreen}/>
                    <Route exact={true} path='/profile/personal-info' component={PersonalinfoScreen}/>
                    <Route exact={true} path='/profile/change-password' component={ChangePasswordScreen}/>

                    
                </Switch>
            </Content>
            </Container>
        </Router>
    )

}
const Container = styled.div `
    background-color: #fff;
    height: 100vh;
    color: #000;
    display: flex;
`
const Content = styled.div `
    flex: 1;
    padding-left: 280px;
`
export default LoggedStack;