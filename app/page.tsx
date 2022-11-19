// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'
import prisma from '../db/prisma'
import {Prisma} from '@prisma/client'

import { makeSerializable } from '../db/util'

const gameWithTags = Prisma.validator<Prisma.GameArgs>()({
  include: { tags: true }
})
export type GameWithTags = Prisma.GameGetPayload<typeof gameWithTags>

import HomePage from './HomePage'

async function getGames(): Promise<GameWithTags[]> {
  const res = await prisma.game.findMany({ include: {
    tags: true
  }})
  return makeSerializable(res)
}

export default async function Page() {
  const games = await getGames();
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1>Why, hello there</h1>
        <HomePage games={games}/>
      </main>
    </div>
  )
}
