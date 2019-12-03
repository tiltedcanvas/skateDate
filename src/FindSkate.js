import React, { Component } from 'react';
import Results from './Results';

class FindSkate extends Component {
    constructor(){
        super();
        this.state = {
            resultsPopup: null,
            findCity: '',
        }   
    }

// Monitors any changes from form
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,

    })
}
//  Prevents default of refreshing page, sets 'skateToFind' to match the city of the event. 
handleSubmit = (e) => {
    e.preventDefault();  
    const skateToFind = {
        cityOfEvent: this.state.findCity
    };

// Sets the state to call in Results
    this.setState({
        resultsPopup: 'showResults',
    })
}

// resets state of results to null to so they can disappear 
resetForm = (e) => {
    this.setState ({
        resultsPopup: null,
    })
}
    render() {
        return (
        <div>
            {this.state.resultsPopup !== 'showResults' ? 
                <form id='findSkateForm' onSubmit={this.handleSubmit}>
                    <h2>Search for a skate</h2>
                    <label htmlFor="findCity"></label>
                    <select id="findCity" onChange={this.handleChange}>
                        <option value="">Choose a City</option>
                        <option value="toronto">Toronto</option>
                        <option value="montreal">Montreal</option>
                        <option value="ottawa">Ottawa</option>
                        <option value="vancouver">Vancouver</option>
                        <option value="calgary">Calgary</option>
                    </select>
                    <button type="submit">Find Skates</button>
                </form> : <Results 
                cityName={this.state.findCity}
                resetForm={this.resetForm}/>
            }
        </div>
        );
        }
        
}
export default FindSkate;