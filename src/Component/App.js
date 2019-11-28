import React, { Component } from 'react';
import Header from "./Header";
import '../App.scss';
import '../index.scss';
import NasaContainer from "./NeoWS/NasaContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

  function App() {
    return (
      <>
        <Header />
        <NasaContainer />
      </>
    );
}

export default App;