import React, { Component } from 'react';
import firebase from './firebase';

class AddSkate extends Component {
    constructor(){
        super();
        this.state = {
            eventHost: '',
            eventType: '',
            dateOfEvent: '',
            address1OfEvent: '',
            address2OfEvent: '',
            cityOfEvent: '',
            provOfEvent: '',
            postalOfEvent: '',
            costOfEvent: 0,
            notesOfEvent: ''
        }
    }
// call database
componentDidMount() {
    const dbRef = firebase.database().ref();
// whenever it changes it gets a snapshot 
    dbRef.on("value", (snapshot) => {
    const skate = snapshot.val();
    //snapshot is weird so we add .val to get the info 
    //METHOD - create new array to hold information
  // creating a for in loop to create a mini object inside of each object. We have restructured this to be an object with two keys
const newSkate = []
    for ( let key in skate ) {
const individualSkate = {
        skateID: key,
        skateName: skate[key]
    }
    newSkate.push(individualSkate)
    }
    //put the data into a State
    // take new array of objects and add to key of skateList and state it
    this.setState({
        skateList: newSkate
        });
    });
}

handleChange = (e) => {
    console.log(e.target.id);
    this.setState({
        [e.target.id]: e.target.value,
    })
}
handleSubmit = (e) => {
    // e.preventDefault();  < turned this off until i can make a thank you page that then refreshes the form
    console.log('submit clicked');
    const skateToAdd = {
        eventHost: this.state.eventHost,
        eventType: this.state.eventType,
        dateOfEvent: this.state.dateOfEvent,
        address1OfEvent: this.state.address1OfEvent,
        address2OfEvent: this.state.address2OfEvent,
        cityOfEvent: this.state.cityOfEvent,
        provOfEvent: this.state.provOfEvent,
        postalOfEvent: this.state.postalOfEvent,
        costOfEvent: this.state.costOfEvent,
        notesOfEvent: this.state.notesOfEvent,
    };
    // get ready to push to database
    const dbRef = firebase.database().ref();
    // if it is empty, don't push
    if(skateToAdd.eventHost !== '') {
        dbRef.push(skateToAdd)
        // after submit, set state to be an empty string
        // this.setState({
        //     eventHost: '',
        // })
    }
}


    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>Add your event below</h2>
            <label htmlFor="nameOfHost"></label>
            <input id="eventHost" placeholder="Who's hosting?" type="text" onChange={this.handleChange} ></input>

            <label htmlFor="eventType"></label>
            <input id="eventType" placeholder="What kind of skate is this?" type="text" onChange={this.handleChange} ></input>

            <label htmlFor="dateOfEvent"></label>
            <input id="dateOfEvent" type="date" name="dateOfEvent" onChange={this.handleChange}></input>
            <label htmlFor="address1OfEvent"></label>
            <input id="address1OfEvent" placeholder="Address 1" type="text" onChange={this.handleChange}></input>
            <label htmlFor="address2OfEvent"></label>
            <input id="address2OfEvent" placeholder="Address 2" type="text" onChange={this.handleChange}></input>
            <label htmlFor="cityOfEvent"></label>
            <input id="cityOfEvent" placeholder="City" type="text" onChange={this.handleChange}></input>

            <label htmlFor="provOfEvent"></label>
            <select id="provOfEvent" onChange={this.handleChange}>
                <option value="">Province or State</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="ON">Ontario</option>
                <option value="PE">Prince Edward Island</option>
                <option value="QC">Quebec</option>
                <option value="SK">Saskatchewan</option>
                <option value="NT">Northwest Territories</option>
                <option value="NU">Nunavut</option>
                <option value="YT">Yukon</option>
            </select>

            <label htmlFor="postalOfEvent"></label>
            <input id="postalOfEvent" placeholder="Postal/Zipcode" type="text" onChange={this.handleChange}></input>

            <label htmlFor="costOfEvent"></label>
            <input id="costOfEvent" placeholder="Are there any costs?" type="text" onChange={this.handleChange}></input>

            <label htmlFor="notesOfEvent"></label>
            <input id="notesOfEvent" placeholder="Any notes?" type="textarea" onChange={this.handleChange}></input>

            <button type="submit">Add Skate!</button>
        </form>
        );
    }
}
export default AddSkate;