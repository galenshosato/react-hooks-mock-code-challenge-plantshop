import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantList, setPlantList}) {
  return (
    <ul className="cards">
      {plantList.map(plant => {
        return <PlantCard key={plant.id} plant={plant} setPlantList={setPlantList} />
      })}
    </ul>
  );
}

export default PlantList;
