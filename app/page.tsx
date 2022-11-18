// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

import HomePage, { GameWithTags } from './HomePage'

async function getGames() {
  try {
    const res = await fetch('http://' + process.env.VERCEL_URL + '/api/games')
    const games: GameWithTags[] = await res.json();
    return games;
  } catch (err) {
    console.log('ERRuR', err)
  }
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
