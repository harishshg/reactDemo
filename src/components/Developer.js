import React, { Component } from 'react';
import '../css/Card.css';
class Developer extends Component {
  render() {
    return (
      <div className="card">
         <h4><b>{this.props.name}</b></h4>
         <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Developer;
