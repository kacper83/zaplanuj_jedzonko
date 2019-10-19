
import React, {Component} from 'react';
import LandingPage from '../components/LandingPage';
import MainWindow from '../aplication/components/MainWindow';
import {HashRouter, Route, Switch, Link, NavLink} from "react-router-dom";
function App() {
    return (
        
        <div maxWidth="100vw"
             style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path="/app" component={MainWindow}/>
                </Switch>
            </HashRouter>
        </div>
    )
}


export default App;
