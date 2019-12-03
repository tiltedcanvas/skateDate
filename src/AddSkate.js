import React, { Component } from 'react';
import firebase from './firebase';
import Thanks from './Thanks.js';

class AddSkate extends Component {
    // creates initial state of each item to have an empty string
    constructor(){
        super();
        this.state = {
            thanksPopup: null,
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
// calls and mounts database
componentDidMount() {
    const dbRef = firebase.database().ref();
// whenever it changes it gets a snapshot 
    dbRef.on("value", (snapshot) => {
    const skate = snapshot.val();
//snapshot is weird so added .val to get the info properly
//METHOD - create new array to hold information
// Create a for in loop to create a mini object inside of each object. We have restructured this to be an object with two keys
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
// Monitor any changes on form
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,
    })
}
// prevents refresh default of page and sets the state of each item by grabbing the changes monitored in handleChange to prepare to submit to database
handleSubmit = (e) => {
    e.preventDefault();  
    const skateToAdd = {
        eventHost: this.state.eventHost,
        eventType: this.state.eventType,
        dateOfEvent: this.state.dateOfEvent,
        startTimeOfEvent: this.state.startTimeOfEvent,
        endTimeOfEvent: this.state.endTimeOfEvent,
        arenaName: this.state.arenaName,
        address1OfEvent: this.state.address1OfEvent,
        address2OfEvent: this.state.address2OfEvent,
        cityOfEvent: this.state.cityOfEvent.toLowerCase(),
        provOfEvent: this.state.provOfEvent,
        postalOfEvent: this.state.postalOfEvent,
        costOfEvent: this.state.costOfEvent,
        notesOfEvent: this.state.notesOfEvent,
        rsvpOfEvent: this.state.rsvpOfEvent.toLowerCase(),
    };
// get ready to push to database
    const dbRef = firebase.database().ref();
// ERROR HANDLING if it is empty, don't push
    if(skateToAdd.eventHost !== '') {
        dbRef.push(skateToAdd)
    }
// Opens up 'thank you' component after submit
    this.setState({
        thanksPopup: 'showThanks',
    })
}
// resets form to add more and sets thanks state to null
resetForm = (e) => {
    this.setState ({
        thanksPopup: null,
    })
}
    render() {
        return (
        <div>
            {this.state.thanksPopup !== 'showThanks' ? 
                <form id='addSkateForm' onSubmit={this.handleSubmit}>

                <h2>Add your event below</h2>
                <label htmlFor="nameOfHost"></label>
                <input id="eventHost" placeholder="Who's hosting?" type="text" onChange={this.handleChange} required></input>
                <label htmlFor="eventType"></label>
                <input id="eventType" placeholder="What kind of skate is this?" type="text" onChange={this.handleChange} required></input>
                <label htmlFor="dateOfEvent"></label>
                <input id="dateOfEvent" type="date" name="dateOfEvent" onChange={this.handleChange} required></input>

                <div className="flexForm">
                    <div className="setTime">
                        <label htmlFor="startTimeOfEvent">Start Time:</label>
                        <input id="startTimeOfEvent" type="time" name="startTimeOfEvent" onChange={this.handleChange} required></input>
                    </div>
    
                    <div className="setTime">
                        <label htmlFor="endTimeOfEvent">End Time:</label>
                        <input id="endTimeOfEvent" type="time" name="endTimeOfEvent" onChange={this.handleChange} required></input>
                    </div>
                </div>

                <label htmlFor="arenaName"></label>
                <input id="arenaName" placeholder="Name of venue" type="text" onChange={this.handleChange} required></input>

                <label htmlFor="address1OfEvent"></label>
                <input id="address1OfEvent" placeholder="Address 1" type="text" onChange={this.handleChange} required></input>
                <label htmlFor="address2OfEvent"></label>
                <input id="address2OfEvent" placeholder="Address 2" type="text" onChange={this.handleChange}></input>
                
                <div className="flexForm">
                    <div className="cityInput">
                        <label htmlFor="cityOfEvent"></label>
                        <input id="cityOfEvent" placeholder="City" type="text" onChange={this.handleChange} required></input>
                    </div>

                    <div className="provinceInput">
                        <label htmlFor="provOfEvent"></label>
                        <select id="provOfEvent" onChange={this.handleChange} required>
                            <option value="">Province</option>
                            <option value="AB">AB</option>
                            <option value="BC">BC</option>
                            <option value="MB">MB</option>
                            <option value="NB">NB</option>
                            <option value="NL">NL</option>
                            <option value="NS">NS</option>
                            <option value="ON">ON</option>
                            <option value="PE">PE</option>
                            <option value="QC">QC</option>
                            <option value="SK">SK</option>
                            <option value="NT">NT</option>
                            <option value="NU">NU</option>
                            <option value="YT">YT</option>
                        </select>
                    </div>

                    <div className="postalInput">
                        <label htmlFor="postalOfEvent"></label>
                        <input id="postalOfEvent" placeholder="Postal/Zipcode" type="text" onChange={this.handleChange} required></input>
                    </div>
                </div>

                <label htmlFor="costOfEvent"></label>
                <input id="costOfEvent" placeholder="Are there any costs?" type="text" onChange={this.handleChange} required></input>
                <label htmlFor="notesOfEvent"></label>
                <input id="notesOfEvent" placeholder="Any description or notes?" type="textarea" onChange={this.handleChange} required></input>

                <label htmlFor="rsvpOfEvent"></label>
                <input id="rsvpOfEvent" placeholder="Email for RSVPs?" type="email" onChange={this.handleChange} required></input>
                <button type="submit">Add Skate!</button>
            </form> : <Thanks resetForm={this.resetForm}/>
            }
            
        </div>
        );
    }
}
export default AddSkate;