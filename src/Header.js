import React, { Component } from 'react';
import Options from './Options.js';
import FindSkate from "./FindSkate.js";
import AddSkate from "./AddSkate.js";

class Header extends Component {
    render() {
        return (
        <div className="wrapper">
            <header>
                <div>
                    <p>Welcome to</p>
                </div>
                <h1>Skate Date&nbsp;&nbsp;</h1>
            </header>
            <Options />
            <FindSkate />
            <AddSkate />
        </div>
        
        );
    }
}
export default Header;