import React, { Component } from 'react';

class FindSkate extends Component {
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="userPostal"></label>
            <input id="userPostal" type="text"></input>
            <button type="submit">Find Skates</button>
        </form>
        );
    }
}
export default FindSkate;