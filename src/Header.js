import React, { Component } from 'react';
import Options from './Options.js';

class Header extends Component {
    render() {
        return (
        <header>
            <div>
                <p>Welcome to</p>
            </div>
            <h1>Skate Date&nbsp;&nbsp;</h1>
            <Options />
        </header>
        );
    }
}
export default Header;