import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plantList, setPlantList] = useState([])

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlantList(data))
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage plantList={plantList} setPlantList={setPlantList} />
    </div>
  );
}

export default App;
