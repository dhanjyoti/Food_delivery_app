import Image from 'next/image'
import Link from 'next/link'
import Logo from '../images/logo.png'

export default function RestaurantHeader() {
  return (
    <div className="flex flex-row justify-between mx-20">
      <div>
        <Image src={Logo} alt="Logo" width={50} height={50} />
      </div>
      <ul className="flex flex-row gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Login/SignUp</Link>
        </li>
        <li>
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  )
}
