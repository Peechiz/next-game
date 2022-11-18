// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../db/prisma'
import { makeSerializable } from '../../db/util'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const games = await prisma.game.findMany({ include: {
    tags: true
  }})
  res.status(200).json(makeSerializable(games))
}
