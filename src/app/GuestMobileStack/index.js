import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import {
    MainScreen
} from './screens'
const Guest = () => {
    return (
        <Router>
            <Switch>
                <Route exact={true} path='/' component={MainScreen}/>
            </Switch>
        </Router>
    )

}

export default Guest;