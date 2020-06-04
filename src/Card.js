import React from "react";

const Card = ({ state, confirmed, active, deaths, recovered }) => {
  return (
    <div className="dib br3 pa3 ma2 mb4 bw2 shadow-5 w5 tc">
      <div>
        <h2 className="white">{state}</h2>
      </div>
      <div className="flex justify-between">
        <div className="w5 light-purple">
          <h3>Cases</h3>
          <p>{confirmed}</p>
        </div>
        <div className="w5 blue">
          <h3>Active</h3>
          <p>{active}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w5 green">
          <h3>Recovered</h3>
          <p>{recovered}</p>
        </div>
        <div className="w5 red">
          <h3>Deceased</h3>
          <p>{deaths}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
