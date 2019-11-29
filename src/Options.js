import React, { Component } from 'react';


class Options extends Component {
    constructor() {
        super();
        this.state = {
        isActive: true
        }
    }

toggleHiddenClass = (event) => {
    console.log('clicked toggle');
    
    // this.setState({
    //     isActive: !this.state.isActive
    // })
}

    render() {
        return (
        <div className="flexParent">
            <div className="buttonContainer">
                <div className="circle">
                    <button onClick={this.toggleHiddenClass}>add a date</button>
                </div>
            </div>
            <div className="buttonContainer">
                <div className="circle">
                    <button onClick={this.toggleHiddenClass}>find a date</button>
                </div>
            </div>
        </div>
        );
    }
}
export default Options;