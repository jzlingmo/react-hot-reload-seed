import React, {Component} from 'react'
import styles from './index.scss';

export  default class AppPage extends Component {
    constructor (props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <div>Hey! This is just a demo page.</div>
            </div>
        )
    }
}
