import Link from 'next/link'
import React from 'react'
import styles from '@/app/ui/styles.module.css'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Githublogin from '@/app/components/githublogin'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/utils/auth'
import { redirect } from 'next/navigation'

export default async function Loginpg(){
    const session = await getServerSession(authOptions)
    if (session) {
        return redirect('/home');
    }
  return (
    <main className={styles.main}>

    <div className={styles.blackbox}>
        <form className={styles.signup}>
            <h1>Log in</h1>
        </form>
            <Input placeholder='Email or phone number' />
        <div>
            <Input placeholder='Password'/>
        </div>
        <div>
            <Button className={styles.button}>Sign In</Button> 
        </div>
        
       
        <div className={styles.buttonmain}>
        <Githublogin/>
        </div>
        
        <div className={styles.link}>
        </div>
        <div className={styles.member}>
            <h1 className={styles.member}>New Member? </h1>
            <Link href="/sign-up">Sign up.</Link>
        </div>
        
    </div>
    </main>
    )
}

