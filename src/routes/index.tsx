import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home } from '../pages/Home';

export const Routes: FunctionComponent = () =>{
    return (
        <Switch>
            <Route path="/" exact component={ Home } />
        </Switch>
    )
}