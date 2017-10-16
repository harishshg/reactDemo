import React, { Component } from 'react';
import './App.css';
import Developer from './components/Developer.js';

class App extends Component {
  render() {
    return (
      <div >
        <Developer name="harry" description="FullStack Developer"/>
        <Developer name="prassu" description="javascript Developer"/>
      </div>
    );
  }
}

export default App;
