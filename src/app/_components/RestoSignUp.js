import React from 'react'

export default function RestoSignUp() {
  return (
    <div className="flex flex-col items-center">
        <h3>Sign Up Component</h3>
        <div>
            <input type="text" placeholder='Enter your email' className="border border-gray-700" />
        </div>
        <div>
            <input type="password" placeholder='Enter your password' className="border border-gray-700"/>
        </div>
        <div>
            <input type="password" placeholder='Confirm password' className="border border-gray-700"/>
        </div>
        <div>
            <input type="text" placeholder='Enter Restaurant Name' className="border border-gray-700"/>
        </div>
        <div>
            <input type="text" placeholder='Enter City' className="border border-gray-700"/>
        </div>
        <div>
            <input type="text" placeholder='Enter Full Address' className="border border-gray-700"/>
        </div>
        <div>
            <input type="number" placeholder='Enter Contact Number' className="border border-gray-700"/>
        </div>
        <div>
            <button className="border border-gray-700">Sign Up</button>
        </div>
    </div>
  )
}