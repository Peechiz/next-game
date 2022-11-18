// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

import HomePage, { GameWithTags } from './HomePage'

export default async function Page() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>Why, hello there</h1>
        <p>{process.env.NEXT_PUBLIC_VERCEL_ENV}</p>
        {/* <p>{baseUrl}/api/games</p> */}
        <HomePage />
      </main>
    </div>
  )
}
