import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './Hello';

const divRoot = document.getElementById('root');

// ReactDOM.render(Hello(), divRoot); //sem babel
ReactDOM.render(<Hello />, divRoot); //com babel