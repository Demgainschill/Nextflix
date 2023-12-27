'use client';
import styles from '@/app/ui/styles.module.css'
import { FileArchiveIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { GithubIcon } from 'lucide-react';
import logo from '../../../public/netflix_logo.svg'
const Navbar = () => {
  return (
    <div> 
      <div>
      <li>
        <Image src={logo} alt={'img'} width={200}
        className='relative top-5 left-4'/>
        </li>
        

      </div>
    <ul className='flex justify-center gap-5'>
    <li><Link href={'/home'} className='text-lg hover:underline'>Home</Link></li>
    <li><Link href={'/home/shows'} className='text-lg hover:underline'>Tv-Shows</Link></li>
    <li><Link href={'/home/recent'} className='text-lg hover:underline'>Recently Added</Link></li>
    <li><Link href={'/home/watch/list'} className='text-lg hover:underline'>Watchlist</Link></li>
  
    </ul>
    </div>
    )
}

export default Navbar