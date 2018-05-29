import React, { Component } from 'react';
import logo from './logo.svg';
import About from './about';
import './App.css';
import Joker from "./images/joker.jpeg";
import Navbar from "./Navbar";


const styles = {
    paperContainer: {
        backgroundImage: `url(${Joker})`,
    }
};

class App extends Component {
  render() {
    return (
      <div className="App" >
        <img src={Joker} className="image"/>
        <div className="nav">
          <Navbar />
        </div>
        <div className="heading">
          <h1>Get free movie info once you hit GET STARTED.</h1>
          <h2>And also a World class experience.</h2>
        </div>
        <button className="start_button">GET STARTED</button>
      </div>
    );
  }
}

export default App;
