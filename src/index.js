import React from 'react';
import ReactDom from 'react-dom'
import  AppPage from './app'

// this page couldn't be hot updated for it is root component module
ReactDom.render(<AppPage />, document.getElementById('App'));
