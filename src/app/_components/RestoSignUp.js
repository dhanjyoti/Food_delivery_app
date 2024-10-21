import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function RestoSignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setC_password] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const router = useRouter();
    const [error, setError] = useState(false);
    const [passwordError, serPasswordError] = useState(false);

    const handleSignup= async()=>{
        if(password !== c_password){
            serPasswordError(true);
            return false;
        } else {
            serPasswordError(false);
        }
        if(!email || !password || !c_password || !name || !city || !address || !contact){
            setError(true);
            return false;
        } else {
            setError(false);
        }

        console.log(email, password, c_password, name, city, address, contact);
        let response = await fetch("http://localhost:3000/api/restaurant", {
            method: 'POST',
            body:JSON.stringify({email, password, name, city, address, contact})
        })
        response = await response.json();
        console.log(response);
        if(response.success){
            // alert("Restaurant Registered Successfully!")
            console.log(response);
            const {result} = response;
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result));
            router.push('/restaurant/dashboard');
        }
    }
  return ( 
    <div className="flex flex-col gap-3 items-center">
        <h3>Sign Up Component</h3>
        <div>
            <input type="text" placeholder='Enter your email' className="border border-gray-700" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            {error && !email && <span className='text-red-500 text-xs absolute pl-3'>Please enter Valid Email</span>}
        </div>
        <div>
            <input type="password" placeholder='Enter your password' className="border border-gray-700" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            {passwordError && <span className='text-red-500 text-xs absolute pl-3'>Password and Confirm Password do not match</span>}
            {error && !password && <span className='text-red-500 text-xs absolute pl-3'>Please enter Password</span>}
        </div>
        <div>
            <input type="password" placeholder='Confirm password' className="border border-gray-700" value={c_password} onChange={(event)=>setC_password(event.target.value)}/>
            {passwordError && <span className='text-red-500 text-xs absolute pl-3'>Password and Confirm Password do not match</span>}
            {error && !c_password && <span className='text-red-500 text-xs absolute pl-3'>Please enter Confirm Password</span>}
        </div>
        <div>
            <input type="text" placeholder='Enter Restaurant Name' className="border border-gray-700" value={name} onChange={(event)=>setName(event.target.value)}/>
            {error && !name && <span className='text-red-500 text-xs absolute pl-3'>Please enter Name</span>}

        </div>
        <div>
            <input type="text" placeholder='Enter City' className="border border-gray-700" value={city} onChange={(event)=>setCity(event.target.value)}/>
            {error && !city && <span className='text-red-500 text-xs absolute pl-3'>Please enter City</span>}

        </div>
        <div>
            <input type="text" placeholder='Enter Full Address' className="border border-gray-700" value={address} onChange={(event)=>setAddress(event.target.value)}/>
            {error && !address && <span className='text-red-500 text-xs absolute pl-3'>Please enter Address</span>}
        </div>
        <div>
            <input type="number" placeholder='Enter Contact Number' className="border border-gray-700" value={contact} onChange={(event)=>setContact(event.target.value)}/>
            {error && !contact && <span className='text-red-500 text-xs absolute pl-3'>Please enter Contact Number</span>}
        </div>
        <div>
            <button className="border border-gray-700" onClick={handleSignup}>Sign Up</button>
        </div>
    </div>
  )
}