"use client";
import AddFoodItem from "@/app/_components/AddFoodItem"
import RestaurantHeader from "@/app/_components/RestaurantHeader"
import { useState } from "react"


const Dashboard = () => {
  const [addItem, setAddItem] = useState(false);

  return (
    <div>
        <RestaurantHeader />
        <button onClick={() => setAddItem(true)} className="border border-gray-900 px-5">Add Food</button>
        <button onClick={() => setAddItem(false)} className="border border-gray-900 px-5">Dashboard</button>
        {
          addItem ? 
          <AddFoodItem /> :
          <h1>Restaurant Dashboard</h1>
        }
    </div>
  )
}

export default Dashboard