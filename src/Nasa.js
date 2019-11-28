import React, { Component } from 'react';
import _ from "lodash";
import moment from "moment";
import NasaItem from "./NasaItem";
import NeoWsContainer from "../DatePicker/NeoWsContainer";

class Nasa extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: null,
        loading: true
      }
    }
  
    async componentDidMount() {
  
      try {
        const data = await getNasaData();
        console.log("Mes données dans getNasaData", data);
  
        const list = data.near_earth_objects;
        console.log("Mes données dans getNasaData", list);
  
        this.setState({
          data: list,
          loading: false
        });
      } catch {
        this.setState({
          error: "Error"
        });
      }
    }
  
    render = () => {
      const error = this.state.error ? "Une erreur est survenue" : "";
  
      return (
        <div className="container">
          <div className="row mt-3">
            <div className="col">
              <a href="/" className="btn btn-sm btn-info">
                Retour à l'accueil
              </a>
            </div>
          </div>
          <div className="row border-bottom mt-1 mb-4">
            <div className="col">
              <h1>Liste des météorites</h1>
            </div>
          </div>
          <div className="row mt-1 mb-4">
            <div className="col">
              <NeoWsContainer />
            </div>
          </div>
          {error}
          {this.state.data &&
            Object.keys(this.state.data).map((dateNasa, i) => (
              <div key={i}>
                <h2 className="mt-4 border-bottom">{dateNasa}</h2>
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
                  {_.get(this.state.data, dateNasa).map(el => (
                    <NasaItem
                      key={el.id}
                      name={el.name}
                      speed={el.close_approach_data[0].relative_velocity.kilometers_per_hour}
                      diameterMin={el.estimated_diameter.meters.estimated_diameter_min}
                      diameterMax={el.estimated_diameter.meters.estimated_diameter_max}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      );
    };
  }
  
  export default Nasa;
  

