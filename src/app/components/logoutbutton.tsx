'use client';
import { signOut } from 'next-auth/react';
import React from 'react'
import { Button } from '@/components/ui/button';

const Logout= () => {
  return (
    <div className='flex  justify-end px-10 relative bottom-22'> 
        <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}

export default Logout

