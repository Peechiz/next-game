'use client';
import {Prisma} from '@prisma/client'
// import { useState } from 'react'

const gameWithTags = Prisma.validator<Prisma.GameArgs>()({
  include: { tags: true }
})
export type GameWithTags = Prisma.GameGetPayload<typeof gameWithTags>


// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ games }: { games: GameWithTags[] } ) {
  // const [games, setGames] = useState<GameWithTags[]>([])

  // async function getGames() {
  //   const res = await fetch( baseUrl + '/api/games')
  //   const games: GameWithTags[] = await res.json();
  //   setGames(games)
  // }

  return (
    <div>
      {games?.map((game) => (
        <div key={game.id}>{game.metadata.name}</div>
      ))}
    </div>
  );
}