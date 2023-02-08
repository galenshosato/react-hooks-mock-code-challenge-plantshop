import React from "react";

function NewPlantForm({setPlantList}) {

  function handleSubmit(event) {
    event.preventDefault()
    
    let newPlant = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value
    }

    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(resp => resp.json())
    
    setPlantList(prev => [...prev,newPlant])

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
