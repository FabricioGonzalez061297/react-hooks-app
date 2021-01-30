

import React from 'react';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <NavBar />

                <div className="container mt-3">
                    <Switch>

                        <Route exact path="/" component={HomeScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/about" component={AboutScreen} />
                        {/* <Route component={HomeScreen} /> */}
                        <Redirect to="/" ></Redirect>


                    </Switch>
                </div>

            </div>
        </Router>
    )
}
