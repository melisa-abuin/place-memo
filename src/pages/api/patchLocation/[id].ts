import { NextApiHandler } from 'next'
import prisma from '../../../../prisma/client'

// PUT /api/patchLocation/:id
const patchHandler: NextApiHandler = async (req, res) => {
  const id = req.query.id as string
  const { title, content } = req.body

  const result = await prisma.location.update({
    where: { id: id },
    data: {
      title,
      content,
    },
  })
  res.json(result)
}

export default patchHandler
