import Head from 'next/head'
import About from '../components/About'
import Hero from '../components/Hero'
import HomePlates from '../components/HomePlates'
import HomeSeparator from '../components/HomeSeparator'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Centralfoodmalaga</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero />
        <HomePlates />
        <About />
        <HomeSeparator />
      </main>
    </div>
  )
}
