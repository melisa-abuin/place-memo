import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

const MapComponent = dynamic(
  () => import('@/components/map').then((module) => module.Map),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
)

export default function Home() {
  return (
    <>
      <Head>
        <title>Places Memories</title>
        <meta name="description" content="Memories of beautiful places" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={inter.className}>
          <MapComponent />
        </div>
      </main>
    </>
  )
}
