'use client';
import {Prisma} from '@prisma/client'

const gameWithTags = Prisma.validator<Prisma.GameArgs>()({
  include: { tags: true }
})
export type GameWithTags = Prisma.GameGetPayload<typeof gameWithTags>

// This is a Client Component. It receives data as props and
// has access to state and effects just like Page components
// in the `pages` directory.
export default function HomePage({ games }: { games: GameWithTags[]}) {
  return (
    <div>
      {games.map((game) => (
        <div key={game.id}>{game.metadata.name}</div>
      ))}
    </div>
  );
}