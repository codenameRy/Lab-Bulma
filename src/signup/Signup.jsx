import React, { Component } from 'react';
import Navbar from '../navbar/Navbar.jsx';
import FormField from '../formfield/FormField.jsx';
import CoolButtons from '../coolbutton/CoolButtons.jsx';

class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" />
                <CoolButtons style="is-success button my-class" text="Signup" />

            </div>
        );
    }
}

export default Signup;