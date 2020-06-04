import React from "react";
import Card from "./Card";

const Cardlist = ({ stats }) => {
  return (
    <div className="flex flex-wrap justify-center pa4">
      {stats.map((stat, i) => {
        return (
          <Card
            key={i}
            state={stats[i].state}
            confirmed={stats[i].confirmed}
            active={stats[i].active}
            recovered={stats[i].recovered}
            deaths={stats[i].deaths}
          />
        );
      })}
    </div>
  );
};

export default Cardlist;
