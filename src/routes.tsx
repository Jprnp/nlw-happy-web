import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './screens/landing';
import OrphanagesMap from './screens/orphanages-map';



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/app" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;