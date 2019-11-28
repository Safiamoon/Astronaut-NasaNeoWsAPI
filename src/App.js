import React, { Component } from 'react';
import Header from "./Header";
import './App.scss';
import './index.scss';
import NasaContainer from "./NasaContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Astronaut from "./NasaItem";


 
// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data:[],

//     };
//   }
 
//   componentDidMount(){
//     const START_DATE = "2019-01-01";
//     const END_DATE = "2019-01-07";
//     const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&`
//     fetch(`${url}&api_key=${process.env.REACT_APP_API_KEY}`)
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         data})
//         console.log(data)
//       })

     
//   }
  function App() {
    return (
      <>
        <Header />
        <NasaContainer />
      </>
    );
}

export default App;