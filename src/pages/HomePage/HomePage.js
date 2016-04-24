import React, {Component} from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

export  default class HomePage extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Home page</h1>
                <div>Hey! This is homepage.</div>
                <ul>
                    <li key={1}>
                        <Link to={{ pathname: '/other/1', query: { sign: 'aaa' } }}>to other page 1</Link>
                    </li>
                    <li key={2}>
                        <Link to={{ pathname: '/other/2', query: { sign: 'bbb' } }}>to other page 2</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
