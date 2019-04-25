import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './../components/header/header';
import Welcome from "../components/welcome/welcome";
import Solo from "../components/solo/solo";
import Lan from "../components/lan/ia";
import Notfound from "../components/notfound/notfound";

import './google-icons.css';

import './../../node_modules/materialize-css/dist/css/materialize.min.css';
import './../../node_modules/materialize-css/dist/js/materialize.min.js';

const Main = () => {
    return (
        <Fragment>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/solo" component={Solo} />
                    <Route path="/lan" component={Lan} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default Main;