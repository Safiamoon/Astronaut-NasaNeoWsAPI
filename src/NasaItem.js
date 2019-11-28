import React from "react";
import "./Nasa.scss";

const NasaItem = ({
  name,
  absolute_magnitude_h,
  estimated_diameter,
  close_approach_data.close_approach_date_full
}) => {

  const arrondi = (nb) => {
    return Math.round(nb);
  }

  return (
    <div className="card shadow mt-3 weather-card forecast-item">
      <div className="card-header text-center bg-primary text-white">
        <h3>{name}</h3>
      </div>
      <div className="card-body">
        <h4>Vitesse : {arrondi(speed)} km/h</h4>
        <h4>D-Min : {arrondi(diameterMin)} m</h4>
        <h4>D-Max : {arrondi(diameterMax)} m</h4>
      </div>
      <div className="card-footer text-center">
        <h4>
          <span className="badge badge-light">
          </span>
        </h4>
      </div>
    </div>
  );
};

export default NasaItem;