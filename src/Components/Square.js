import React, { Component } from 'react';
import '../App.css';
class Square extends Component {
   
    render() {
        return (
            <button className="square" onClick={() => { this.props.onClick() }}>
                <span>{this.props.value}</span>
            </button>
        );
    }
}

export default Square;