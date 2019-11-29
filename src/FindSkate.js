import React, { Component } from 'react';

class FindSkate extends Component {
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>Search for a skate</h2>
            <label htmlFor="findPostal"></label>
            <input id="findPostal" placeholder="Province or State" type="text"></input>
            <button type="submit">Find Skates</button>
        </form>
        );
    }
}
export default FindSkate;