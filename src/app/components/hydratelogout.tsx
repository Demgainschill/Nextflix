'use client';
import React from 'react'
import Logout from './logoutbutton';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const Hydratelogout = () => { 
    return ( 
        <div className='flex justify-end relative bottom-44 px-4'>
            

        <Button onClick={() => signOut()} size='icon'
        className='px-10 '> 
        Sign out
        </Button>
        
        </div>
    )

}

export default Hydratelogout