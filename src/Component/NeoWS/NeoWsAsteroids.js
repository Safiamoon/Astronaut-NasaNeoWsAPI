import React from 'react';

const NeoWsAsteroids = ({ asteroidsCollection }) => {
  // Extraction des dates
  const asteroidsDates = Object.keys(asteroidsCollection);
  console.log("Dates des astéroïdes : ", asteroidsDates);

  const sortedasteroidDates = asteroidsDates.slice().sort((a, b) => {
    let dateA = new Date(a);
    let dateB = new Date(b);

    return  dateA - dateB;
  });

  return (
    <div className={`d-flex flex-lg-row font-size: 3em`}>
      {sortedasteroidDates.map(asteroidsDate => (
        <div className ={`text-white`} key={asteroidsDate} >
          <h2 style ={{color:"red"}} >{asteroidsDate}</h2>
          <div className={`flex-wrap flex-lg-row justify-content-center align-items-centertext-center text-white font-style: gras`}>
            {asteroidsCollection[asteroidsDate].map(asteroid => (
              <div key={asteroid.id}>{asteroid.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NeoWsAsteroids;