import type { NextPage } from 'next'
import Head from 'next/head'
import SectionCover from '../components/section-cover'
import SectionHeader from '../components/section-header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Suite Landing Page</title>               
      </Head>
      <main>
        <SectionHeader/>
        <SectionCover/>
      </main>
    </>
  )
}

export default Home
