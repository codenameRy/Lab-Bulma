import React, { Component } from 'react';
import './CoolButtons.css'

class CoolButtons extends Component {
    render() {
        return (
            <div>
                {/* <button class="button is-rounded my-class is-danger is-small">Button 1</button>
                <button class="button is-small is-success">Button 2</button> */}
                <button className={this.props.style} >{this.props.text}</button>
                
            </div>
        );
    }
}

export default CoolButtons;