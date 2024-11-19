import React, { useState } from 'react'

const AddFoodItem = () => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();

    const handleAddFoodItem=(e)=>{
        e.preventDefault();
        console.log(name, price, image, description);
    }
  return (
    <div>
        <h1>Add New Food Item</h1>
    <form>
        <input type="text" placeholder="Food Name" value={name} onChange={(e)=> setName(e.target.value)} />
        <input type="text" placeholder="Food Price" value={price} onChange={(e)=> setPrice(e.target.value)} />
        <input type="text" placeholder="Food Image" value={image} onChange={(e)=> setImage(e.target.value)} />
        <input type="text" placeholder="Food Description" value={description} onChange={(e)=> setDescription(e.target.value)} /> 
        <button onClick={handleAddFoodItem}>Add Food</button>
    </form>
    </div>
  )
}

export default AddFoodItem;