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
// call database
// componentDidMount() {
// const dbRef = firebase.database().ref();
// }

handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value,

    })
}
handleSubmit = (e) => {
    e.preventDefault();  
    const skateToFind = {
        cityOfEvent: this.state.findCity
    };
    console.log(skateToFind)
    // get ready to pull to database
    // const dbRef = firebase.database().ref();
    this.setState({
        resultsPopup: 'showResults',
    })
}
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