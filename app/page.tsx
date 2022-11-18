// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

import HomePage, { GameWithTags } from './HomePage'

async function getGames() {
  const res = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + '/api/games')
  const games: GameWithTags[] = await res.json();
  return games;
}

export default async function Page() {
  const games = await getGames();
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>Why, hello there</h1>
        <HomePage games={games} />
      </main>
    </div>
  )
}
