import './App.css';
import React, { Component } from 'react';
import CVBuilder from './components/CVBuilder';
import CVDisplay from './components/CVDisplay';

class App extends Component {

  constructor(){
    super();
  }
  
  render() {

    return (
      <div className="App">
      <div id="content">
        <CVBuilder />
        <CVDisplay />
      </div>
    </div>
  );
}
}

export default App;
