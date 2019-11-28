import React, { Component } from 'react';


class Options extends Component {
    render() {
        return (
        <div className="flexParent">
            <div className="buttonContainer">
                <div className="circle">
                    <button>add a date</button>
                </div>
            </div>
            <div className="buttonContainer">
                <div className="circle">
                    <button>find a date</button>
                </div>
            </div>
        </div>
        );
    }
}
export default Options;