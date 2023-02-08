import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantList, setPlantList}) {
  const [searchQuery, setSearchQuery] = useState('')

  function handleChange(event) {
    setSearchQuery(event.target.value)
    
  }

  let filteredList = plantList.filter(plant => {
    return plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  })



  return (
    <main>
      <NewPlantForm setPlantList={setPlantList} plantList={plantList} />
      <Search handleChange={handleChange}/>
      <PlantList plantList={filteredList} setPlantList={setPlantList} />
    </main>
  );
}

export default PlantPage;
