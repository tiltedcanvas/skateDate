import React, { Component } from 'react';

class Options extends Component {
    render() {
        return (
        <div className="flexParent">
            <div className="buttonContainer">
                <div className="circle">
                    <button id="addSkate" onClick={this.props.handleClick}>add a date</button>
                </div>
            </div>
            <div className="buttonContainer">
                <div className="circle">
                    <button id="findSkate" onClick={this.props.handleClick}>find a date</button>
                </div>
            </div>
        </div>
        );
    }
}
export default Options;