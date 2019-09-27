// Libraries
import React from 'react';
import { Route, Redirect, Switch} from "react-router-dom";

// Components
import Categories from '../pages/Categories'
import Locations from '../pages/Locations'
import Location from '../pages/Location'
import Welcome from './Welcome';
import NotFoundPage from './NotFoundPage';

const RouterHandle = () => (
    <div>
        <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/categories" exact component={Categories} />
            <Route path="/locations" exact component={Locations} />
            <Route path="/location/:id" exact component={Location} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
        </Switch>
    </div>
)

export default RouterHandle