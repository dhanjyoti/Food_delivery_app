import React from 'react'

export default function RestaurantLogin() {
  return (
    <div className="flex flex-col items-center">
        <h3>Login Component</h3>
        <div>
            <input type="text" placeholder='Enter your email' />
        </div>
        <div>
            <input type="password" placeholder='Enter your password' />
        </div>
        <div>
            <button className="border border-gray-700">Login</button>
        </div>
    </div>
  )
}