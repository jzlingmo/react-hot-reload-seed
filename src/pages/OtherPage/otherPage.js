import React, {Component} from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'

export  default class OtherPage extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Other page {this.props.params.id}</h1>
                <div>Hey!This is other page {this.props.params.id}.</div>
            </div>
        )
    }
}
