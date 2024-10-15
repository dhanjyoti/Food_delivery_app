import React, { useState } from 'react'

export default function RestoSignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');

    const handleSignup=()=>{
        console.log(email, password, c_password, name, city, address, contact)
    }
  return ( 
    <div className="flex flex-col gap-3 items-center">
        <h3>Sign Up Component</h3>
        <div>
            <input type="text" placeholder='Enter your email' className="border border-gray-700" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div>
            <input type="password" placeholder='Enter your password' className="border border-gray-700" value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </div>
        <div>
            <input type="password" placeholder='Confirm password' className="border border-gray-700" value={c_password} onChange={(event)=>setC_password(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Enter Restaurant Name' className="border border-gray-700" value={name} onChange={(event)=>setName(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Enter City' className="border border-gray-700" value={city} onChange={(event)=>setCity(event.target.value)}/>
        </div>
        <div>
            <input type="text" placeholder='Enter Full Address' className="border border-gray-700" value={address} onChange={(event)=>setAddress(event.target.value)}/>
        </div>
        <div>
            <input type="number" placeholder='Enter Contact Number' className="border border-gray-700" value={contact} onChange={(event)=>setContact(event.target.value)}/>
        </div>
        <div>
            <button className="border border-gray-700" onClick={handleSignup}>Sign Up</button>
        </div>
    </div>
  )
}