import { Button } from '@/components/ui/button'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../utils/auth'
import { redirect } from 'next/navigation'
import LogOut from '../components/logoutbutton'
import Navbar from '../components/navbar'

export default async function HomePage(){
  const session = await getServerSession(authOptions)
  if (!session){
    return redirect('/login')
  }
  return (
    <div>
        <Navbar/>
        <p> Welcome to the HomePage</p>
        <LogOut/>        
    </div>
    )
}
