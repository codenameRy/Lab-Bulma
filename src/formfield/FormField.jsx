import React, { Component } from 'react';
import './FormField.css'

class FormField extends Component {
    render() {
        return (
            <div>
                <div class="field">
                    <label class="label">{this.props.label}</label>
                    <div class="control">
                    <input class="input" type={this.props.input} placeholder={this.props.placeholder} />
                    </div>
                </div>
            </div>
        );
    }
}

export default FormField;