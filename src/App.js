import React, { Component } from 'react';
// import firebase from './firebase';
import './App.scss';
import Header from './Header.js';
import Options from './Options.js';
import FindSkate from './FindSkate.js';
import AddSkate from './AddSkate.js';
import Footer from './Footer.js';


class App extends Component {
  constructor(){
    super();
    this.state = {
        currentView: null
    }
  }
  handleClick = (e) => {
    console.log('add a skate')
    console.log(e.target.id)
    this.setState({
        currentView: e.target.id
      })
  }
  render (){
    return (
      <div>
        <div className="pageFlexContainer">
          <Header />
          <Options 
            handleClick={this.handleClick}
          />
            {this.state.currentView === 'findSkate' && <FindSkate />}
            {this.state.currentView === 'addSkate' && <AddSkate />}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
