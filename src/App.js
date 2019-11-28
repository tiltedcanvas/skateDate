import React, { Component } from 'react';
import firebase from "./firebase";
import './App.scss';

class App extends Component {
  // call database
  componentDidMount() {
    const dbRef = firebase.database().ref();
  }
  render (){
    return (
      <div>
        <div className="welcomeFlag">
          <p>Welcome to</p>
        </div>
        <h1>Skate Date</h1>
        <div class="flexParent">
          <div className="buttonContainer">
            <div className="circle">
            <a href="#">Add a Date</a>
            </div>
          </div>
          <div className="buttonContainer">
            <div className="circle">
            <a href="#">Add a Date</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
