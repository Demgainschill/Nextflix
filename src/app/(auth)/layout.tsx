import Image from 'next/image'
import { ReactNode} from 'react'
import BackgroundImage from '../../../public/login_background.jpg'
import Logo from '../../../public/netflix_logo.svg'

const AuthLayout = ({ children } : { children : ReactNode } ) => {
  return (
    <body>

    <div>
    <Image src={BackgroundImage} 
    alt="background-img" 
    className='hidden sm:flex sm:object-cover -z-10 brightness-50' 
    priority
    fill
    />

    <Image src= {Logo} alt="logo" className='absolute left-4 top-4 object-contain md:left-10 md:top-6'
    width={120}
    height={120}/>
    {children}

    </div>
    </body>
  )
}

export default AuthLayout