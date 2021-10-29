import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Upload from './pages/Upload';
import Player from './pages/Player';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/upload" exact component={Upload} />
                <Route path="/watch" component={Player} />
            </Switch>
        </BrowserRouter>
    );
}