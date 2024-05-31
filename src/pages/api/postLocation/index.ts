import { NextApiHandler } from 'next'
import prisma from '../../../../prisma/client'

const postHandler: NextApiHandler = async (req, res) => {
  const { title, content, xCoordinate, yCoordinate } = req.body

  const result = await prisma.location.create({
    data: {
      title,
      content,
      xCoordinate,
      yCoordinate,
    },
  })
  res.json(result)
}

export default postHandler
