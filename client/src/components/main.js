import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import TheHome from './home';
const Main = () => (
    <Switch>
        <Route exact path = "/" component = { TheHome } />
    </Switch>
)
export default Main;
