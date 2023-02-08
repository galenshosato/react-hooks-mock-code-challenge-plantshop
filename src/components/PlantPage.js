import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, setPlantList}) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantList={plantList} setPlantList={setPlantList} />
    </main>
  );
}

export default PlantPage;
