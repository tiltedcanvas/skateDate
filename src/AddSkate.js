import React, { Component } from 'react';

class AddSkate extends Component {
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="userName"></label>
            <input id="userName" placeholder="What's your name?" type="text"></input>

            <label htmlFor="address1OfEvent"></label>
            <input id="address1OfEvent" placeholder="Address 1" type="text"></input>
            <label htmlFor="address2OfEvent"></label>
            <input id="address2OfEvent" placeholder="Address 2" type="text"></input>
            <label htmlFor="cityOfEvent"></label>
            <input id="cityOfEvent" placeholder="City" type="text"></input>
            <label htmlFor="provOfEvent"></label>
            <input id="provOfEvent" placeholder="Province or State" type="text"></input>
            <label htmlFor="postalOfEvent"></label>
            <input id="postalOfEvent" placeholder="Postal/Zipcode" type="text"></input>

            <label htmlFor="costOfEvent"></label>
            <input id="costOfEvent" placeholder="Are there any costs?" type="text"></input>

            <label htmlFor="notesOfEvent"></label>
            <input id="notesOfEvent" placeholder="Any notes?" type="textarea"></input>

            <button type="submit">Add Skate!</button>
        </form>
        );
    }
}
export default AddSkate;