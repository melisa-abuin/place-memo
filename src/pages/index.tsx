import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'
import { GetStaticProps } from 'next'
import prisma from '../../prisma/client'
import type { Location, LocationData } from '@/interfaces/location'
import { ToastProvider } from '@/hooks/useToast'
import { PageContainer } from '@/components/organisms/pageContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ locations }: { locations: Location[] }) {
  return (
    <>
      <Head>
        <title>Places Memories</title>
        <meta name="description" content="Memories of beautiful places" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} ${inter.className}`}>
        <ToastProvider>
          <PageContainer locations={locations} />
        </ToastProvider>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let locations: LocationData[] = []

  try {
    locations = (await prisma.location.findMany()) as LocationData[]
  } catch (e) {
    // TODO: handle error properly with a modal
    // eslint-disable-next-line
    console.log('Database is not active')
  }

  return {
    props: {
      locations: locations.map((location) => ({
        ...location,
        xCoordinate: location.xCoordinate.toNumber(),
        yCoordinate: location.yCoordinate.toNumber(),
      })),
    },
    revalidate: 10,
  }
}
