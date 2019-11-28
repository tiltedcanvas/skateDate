import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render (){
    return (
      <div>
        <div className="welcomeFlag">
          <p>Welcome to</p>
        </div>
        <h1>Skate Date</h1>
        <div class="flexParent">
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
