"use client";
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logo.png'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RestaurantHeader() {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(()=>{
    let data = localStorage.getItem("restaurantUser");
    if(!data && pathName == "/restaurant/dashboard"){
      router.push("/restaurant");
    } else if(data && pathName == "/restaurant"){
      router.push("/restaurant/dashboard");
    } else {
      setDetails(JSON.parse(data));
    }
  },[])

  const logout=()=>{
    localStorage.removeItem("restaurantUser");
    router.push("/restaurant");
  }
  return (
    <div className="flex flex-row justify-between mx-20">
      <div>
        <Image src={Logo} alt="Logo" width={50} height={50} />
      </div>
      <ul className="flex flex-row gap-5">
        <li><Link href="/">Home</Link></li>
        {details && details.name  ? 
          <>
            <li><button onClick={logout}>Logout</button></li>
            <li><Link href="/">Profile</Link></li>
          </>  :
        <li><Link href="/">Login/SignUp</Link></li>
        }
      </ul>
    </div>
  )
}
