import { Route, Switch } from 'react-router-dom';
import Explore from './Explore';
import Main from './Main';
import NotFound from './NotFound';
import React from 'react';
import Preview from './Preview';

export default (
    <Switch>
        <Route exact path="/">
            <Main />
        </Route>
        <Route path="/explore">
            <Explore />
        </Route>
        <Route path="/preview">
            <Preview />
        </Route>
        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);
