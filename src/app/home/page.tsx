import { Button } from '@/components/ui/button'
import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '../utils/auth'
import { redirect } from 'next/navigation'
import LogOut from '../components/logoutbutton'
import Navbar from '../components/navbar'
import RecentlyAdded from '../components/recentlyadded'
import MovieVideo from '../components/movievideo'

export default async function HomePage(){
  const session = await getServerSession(authOptions)
  if (!session){
    return redirect('/login')
  }
  return (
    <><div><MovieVideo /></div><p className='text-6xl text-white font-semibold relative top-96'> Recently Added</p><RecentlyAdded /></>
    
    )
}
