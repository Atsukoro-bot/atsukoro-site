import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import wave from "../public/images/wave.png"




export default function Home() {
  return (
    <>
      <Image src={wave} alt={"wave"} layout={"fill"}/>
      <div className={styles.container}>
        <Head>
          <title>Atsukoro</title>
          <meta name="description" content="Best Discord anime bot" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

          <div className={styles.head}>
            <h1>Atsukoro</h1>
            <h2>Best Anime bot</h2>
          </div>
      
      </div>

    </>

  )
}
