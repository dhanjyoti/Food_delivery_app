import React from 'react'

export default function RestoSignUp() {
  return (
    <div className="flex flex-col items-center">
        <h3>Sign Up Component</h3>
        <div>
            <input type="text" placeholder='Enter your email' />
        </div>
        <div>
            <input type="password" placeholder='Enter your password' />
        </div>
        <div>
            <input type="password" placeholder='Confirm password' />
        </div>
        <div>
            <input type="text" placeholder='Enter Restaurant Name' />
        </div>
        <div>
            <input type="text" placeholder='Enter City' />
        </div>
        <div>
            <input type="text" placeholder='Enter Full Address' />
        </div>
        <div>
            <input type="number" placeholder='Enter Contact Number' />
        </div>
        <div>
            <button className="border border-gray-700">Sign Up</button>
        </div>
    </div>
  )
}