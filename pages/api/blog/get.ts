import type { NextApiRequest, NextApiResponse } from 'next'
import { prismicClient } from '../../../lib/prismicClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const prismicResponse = await prismicClient.getAllByType('posts')

  res.status(200).json(prismicResponse)
}