"use client";
import React, { useState } from 'react'
import RestaurantLogin from '../_components/RestaurantLogin'
import RestaurantSignUp from '../_components/RestaurantSignup'

export default function Restaurants() {
    const [login, setLogin] = useState(true);
  return (
    <div className="flex flex-col items-center">
        <h1>Restaurants Login/SignUp Page</h1>
        {
            login ? <RestaurantLogin/> : <RestaurantSignUp/>
        }
        
        <div>
        <button onClick={()=> setLogin(!login)} className="text-blue-500">
            {login ? "Do not have account? Sign Up" : "Already have account? Login"}
        </button>
        </div>
    </div>
  )
}
