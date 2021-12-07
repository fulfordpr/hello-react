import './App.css';
import React, { Component } from 'react';
import HelloReact from './components/HelloReact.component.jsx'
import GoodJob from './components/GoodJob.component.jsx'
import WhatIsAComponent from './components/WhatIsAComponent.component.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      reactNumber:0
    }
  }
  
  incrementReactNumber=(num)=>{
    console.log('clicked')
    this.setState((state)=> {
      console.log(this.state.reactNumber)
      return {reactNumber: state.reactNumber + num};
    });
  }

  render(){
    return (
      <div className="App">
        <HelloReact onActivation={this.incrementReactNumber}/>
        <GoodJob clicks={this.state.reactNumber}/>
        <WhatIsAComponent clicks={this.state.reactNumber}/>

      </div>
    );
  }

}

export default App;
