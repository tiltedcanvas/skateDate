import React, { Component } from 'react';
import firebase from './firebase';

class Results extends Component {
    constructor(){
        super();
        this.state = {
            skateList: [],
        }   
    }
    // calls and mounts database for grabbing data searched for
    componentDidMount() {
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
                            if (this.props.cityName === this.state.skateList[i].skateDetails.cityOfEvent)
                                return (
                                    <li key={i} className='eachResult'>
                                    <h4>{this.state.skateList[i].skateDetails.eventHost}</h4>
                                    <ul className='flexList'>
                                        <li><span className='infoTitle'>Type of Skate</span><p>{this.state.skateList[i].skateDetails.eventType}</p></li>

                                        <li><span className='infoTitle'>Date</span><p>{this.state.skateList[i].skateDetails.dateOfEvent}</p></li>

                                        <li><span className='infoTitle'>Start Time</span>
                                        <p>{this.state.skateList[i].skateDetails.startTimeOfEvent}</p> </li>
                                        <li><span className='infoTitle'>End Time</span>
                                        <p>{this.state.skateList[i].skateDetails.endTimeOfEvent}</p>
                                        </li>
                                        <li><span className='infoTitle'>Address</span>
                                            <p>{this.state.skateList[i].skateDetails.address1OfEvent}</p>
                                            <p>{this.state.skateList[i].skateDetails.address2OfEvent}</p>
                                            <p className='addressStyle'>{this.state.skateList[i].skateDetails.cityOfEvent}, {this.state.skateList[i].skateDetails.provOfEvent}</p>
                                            <p className='postalStyle'>{this.state.skateList[i].skateDetails.postalOfEvent}</p>
                                        </li>
                                        <li><span className='infoTitle'>Cost</span> <p>$ {this.state.skateList[i].skateDetails.costOfEvent}</p></li>

                                        <li><span className='infoTitle'>Notes</span><p>{this.state.skateList[i].skateDetails.notesOfEvent}</p></li>
                                    </ul>
                                    <a className='mailToLink' href='mailto:{this.state.skateList[i].skateDetails.rsvpOfEvent}?subject=RSVP for your SkateDate'>Contact</a>
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