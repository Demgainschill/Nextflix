import React from 'react'
import Link from 'next/link';
import styles from '@/app/ui/styles.module.css'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
const Signuppg = () => {
  return (
    <main className={styles.main}>

    <div className={styles.blackbox}>
        <form className={styles.signup}>
            <h1>Sign up</h1>
        </form>
            <Input placeholder='Email or phone number' />
        <div>
            <Button className={styles.button}>Sign Up</Button> 
        </div>
        <div className={styles.member}>
                <h1>Already a member? </h1>
        
        </div>
              <div className={styles.link}>

                <Link href="/login">Sign in.</Link>
              </div>
    </div>
    </main>
    );
}

export default Signuppg