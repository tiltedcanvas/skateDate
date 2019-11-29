import React, { Component } from 'react';

class AddSkate extends Component {

handleChange = (event) => {
    console.log(event.target.value);
    console.log(this);
    // this.setState({
    //   [event.target.id]:
    //   event.target.value
    // })
}
handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit clicked');
}


    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <h2>Add your event below</h2>
            <label htmlFor="nameOfHost"></label>
            <input id="nameOfHost" placeholder="What's your name?" type="text" onChange={this.handleChange} ></input>
            <label htmlFor="dateOfEvent"></label>
            <input id="dateOfEvent" type="date" name="dateOfEvent" onChange={this.handleChange}></input>
            <label htmlFor="address1OfEvent"></label>
            <input id="address1OfEvent" placeholder="Address 1" type="text" onChange={this.handleChange}></input>
            <label htmlFor="address2OfEvent"></label>
            <input id="address2OfEvent" placeholder="Address 2" type="text" onChange={this.handleChange}></input>
            <label htmlFor="cityOfEvent"></label>
            <input id="cityOfEvent" placeholder="City" type="text" onChange={this.handleChange}></input>

            <label htmlFor="provOfEvent"></label>
            <select id="provOfEvent">
                <option value="ON">Ontario</option>
                <option value="AB">Alberta</option>
                <option value="BC">British Columbia</option>
                <option value="MB">Manitoba</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
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