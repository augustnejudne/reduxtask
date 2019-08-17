import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="Wrapper">
          <SideBar />
          <Main />
        </div>
      </div>
    )
  }
}

export default App;
