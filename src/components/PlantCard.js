import React, {useState} from "react";

function PlantCard({plant, setPlantList}) {
  const [isInStock, setIsInStock] = useState(true)

  function handleClick(event) {
    setIsInStock(prev => !prev)
  }

  function deletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' 
      }
    } )
    .then(resp => resp.json())

    setPlantList(prev => prev.filter(plant => {
      return plant.id !== id
    }))
  }


  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={() => deletePlant(plant.id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
