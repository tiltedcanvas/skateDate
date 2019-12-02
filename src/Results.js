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
      console.log(newSkate)

      this.setState ({
          skateList: newSkate
      })
        })
        
    }


    // getCity = (e, choiceOfCity) => {
    //     e.preventDefault();
      
    //     const originalArray = [...this.state.skateList];
        
    //     const skateList = originalArray.filter ( (cityOfSkate) => {
    //       return eachSkate[choiceOfCity] === true;
    //     });
      
    //     const skateList = skateList.filter( (cityOfEvent) => {
    //       return skateList.cityOfEvent = '';
    //     });
      
    //     this.setState({
    //       eachSkate: cityOfSkate
    //     });


   
    render (){
        return (
            <div id='resultsPopup' className='resultsPopup'>
                <h2>Skates in your City</h2>
                <div className='resultsContent'>
                    <ul>
                        {this.state.skateList.map((skateValue, i) => {
                            console.log('test');
                        return (
                            <li key={i} className='eachResult'>
                            <h4>name</h4>
                            <ul className='flexList'>
                                <li><span className='infoTitle'>Type of Skate: </span> Roller derby practice</li>
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