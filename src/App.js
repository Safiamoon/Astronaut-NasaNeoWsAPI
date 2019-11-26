import React, { Component } from 'react';
import Nav from "./Nav";
import './App.scss';


class App extends Component {
  render = () => {
    return (
      <>
        <Nav />
        <div className="container">
        </div>
      </>
    );
  };
}
export default App;