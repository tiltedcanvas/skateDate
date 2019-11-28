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
        <div className="flexParent">
          <button className="circle">
            <h2>Add a Date</h2>
          </button>
          <button className="circle">
            <h2>Find a Date</h2>
          </button>
        </div>
      </div>
    )
  }
}

export default App;
