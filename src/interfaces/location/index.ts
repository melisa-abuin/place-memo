import { Decimal } from '@prisma/client/runtime'

export interface Location {
  id: string
  title: string
  content?: string
  xCoordinate: number
  yCoordinate: number
}

export interface LocationData {
  id: string
  title: string
  content?: string
  xCoordinate: Decimal
  yCoordinate: Decimal
}

export interface LocationFields {
  name: string
  description?: string
}
