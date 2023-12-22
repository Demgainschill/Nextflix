'use client';
import { signOut } from 'next-auth/react';
import React from 'react'
import { Button } from '@/components/ui/button';

const Logout= () => {
  return (
    <div> 
        <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}

export default Logout

