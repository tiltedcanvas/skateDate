import React, { Component } from 'react';
import firebase from './firebase';
import './App.scss';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  // call database
  componentDidMount() {
    const dbRef = firebase.database().ref();
  }
  render (){
    return (
      <div className="pageFlexContainer">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
