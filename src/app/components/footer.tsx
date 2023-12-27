'use client';
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    

    <div className='text-4xl relative top-96 flex bg-red-800 justify-center items-center  space-x-60 py-4 brightness-75 flex-1'>
        <Link href='#' className='text-md text-white font-semibold '>Netflix 2024-2025</Link>
        <ul>
            <li >Newsletter</li>
            <li>Contact</li>
            <li></li>
        </ul>
    </div>
        

    )
}

export default Footer