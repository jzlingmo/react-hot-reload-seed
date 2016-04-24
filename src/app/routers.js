import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory } from 'react-router'

import HomePage from '../pages/HomePage'
import OtherPage from '../pages/OtherPage'

export  default class RouterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomePage}/>
                <Route path="home" component={HomePage}/>
                <Route path="other/:id" component={OtherPage}/>
                <Route path="*" component={HomePage}/>
            </Router>
        )
    }
}
