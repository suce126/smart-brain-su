import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navigation></Navigation>
      <Logo></Logo>
      <Rank></Rank>
      <ImageLinkForm></ImageLinkForm>
     {/*  <FaceRecognition></FaceRecognition> */}
      </div>
    );
  }
}

export default App;
