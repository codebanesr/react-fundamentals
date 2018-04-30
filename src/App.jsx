import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/Header'
class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        {/* React router will pass in the children to the app component */}
        {this.props.children}
      </div>
    );
  }
}



export default App;
