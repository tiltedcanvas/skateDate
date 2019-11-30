import React, { Component } from 'react';
import firebase from './firebase';

class FindSkate extends Component {

    // call database
    componentDidMount() {
    const dbRef = firebase.database().ref();
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>Search for a skate</h2>
            <label htmlFor="findCity"></label>

            <select id="findCity">
                <option value="">Choose a City</option>
                <option value="toronto">Toronto</option>
                <option value="montreal">Montreal</option>
                <option value="ottawa">Ottawa</option>
            </select>
            <button type="submit">Find Skates</button>
        </form>
        );
    }
}
export default FindSkate;