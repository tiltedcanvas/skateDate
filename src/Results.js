import React, { Component } from 'react';
import firebase from './firebase';

class Results extends Component {
    constructor(){
        super();
        this.state = {
            skateList: [],
        }   
    }
    componentDidMount() {
        console.log(this.props.cityName);
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const skate = response.val();
            const newSkate = []

    for(let key in skate){
        const eachSkate = {
            skateId: key,
            skateDetails: skate[key]
        }
        newSkate.push(eachSkate)
        }
        this.setState ({
            skateList: newSkate
        })
    })
        
    }
    render (){
        return (
            <div id='resultsPopup' className='resultsPopup'>
                <h2>Skates in your City</h2>
                <div className='resultsContent'>
                    <ul>
                        {this.state.skateList.map((skateValue, i) => {
                            console.log(this);
                        return (
                            <li key={i} className='eachResult'>
                            <h4>{this.state.skateList[i].skateDetails.eventHost}</h4>
                            <ul className='flexList'>
                                <li><span className='infoTitle'>Type of Skate: </span>{this.state.skateList[i].skateDetails.eventType}</li>
                                <li><span className='infoTitle'>Date: </span>{this.state.skateList[i].skateDetails.eventDate}</li>
                                <li><span className='infoTitle'>Time: </span> </li>
                                <li><span className='infoTitle'>Address: </span>
                                {this.state.skateList[i].skateDetails.address1OfEvent}
                                {this.state.skateList[i].skateDetails.address2OfEvent}
                                {this.state.skateList[i].skateDetails.cityOfEvent}
                                {this.state.skateList[i].skateDetails.provOfEvent}
                                </li>
                                <li><span className='infoTitle'>Cost: </span> ${this.state.skateList[i].skateDetails.costOfEvent}</li>
                                <li><span className='infoTitle'>Notes: </span>{this.state.skateList[i].skateDetails.notesOfEvent}</li>
                            </ul>
                            <button>Contact</button>
                            </li>
                        )
                        })};
                    </ul>
                </div>
                <button onClick={this.props.resetForm} className='resetForm'>Return to Search</button>
            </div>
        )
    }
}
export default Results;