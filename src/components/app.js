import React from "react";
import Navbar from './navbar'
import {BrowserRouter as Router} from 'react-router-dom'

import ComponentsList from "./components-list";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import { createBrowserHistory } from 'history';
import CreateComponentPage from "./create-component-page";

export default function App () {
    const history = createBrowserHistory();

    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                    <Switch>
                        <Route path="/"
                               history={history}
                               component={ComponentsList} exact />
                        <Route path="/create"
                               history={history}
                               component={CreateComponentPage} exact />

                        <Route render={() => (
                            <div className="text-center p-5 text-white">
                                <h1>404</h1>
                                <p>Page not found</p>
                            </div>
                        )} />
                    </Switch>
            </div>
        </Router>
    );
}