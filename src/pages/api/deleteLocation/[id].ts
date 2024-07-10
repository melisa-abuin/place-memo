import { NextApiHandler } from 'next'
import prisma from '../../../../prisma/client'

// PUT /api/deleteHandler/:id
const deleteHandler: NextApiHandler = async (req, res) => {
  const id = req.query.id as string

  const result = await prisma.location.delete({
    where: { id: id },
  })
  res.json(result)
}

export default deleteHandler
