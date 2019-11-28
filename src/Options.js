import React, { Component } from 'react';
import FindSkate from "./FindSkate.js";
import AddSkate from "./AddSkate.js";

class Options extends Component {
    render() {
        return (
        <div className="flexParent">
            <div className="buttonContainer">
                <div className="circle">
                    <a href="#">add a date</a>
                </div>
            </div>
            <div className="buttonContainer">
                <div className="circle">
                    <a href="#">find a date</a>
                </div>
            </div>
        </div>
        );
    }
}
export default Options;