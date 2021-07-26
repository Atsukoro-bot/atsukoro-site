import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import wave from "../public/images/wave.png"




export default function Home() {
  return (
    <>
      <div className={styles.wave}/>
          <Head>
            <title>Atsukoro</title>
            <meta name="description" content="Best Discord anime bot" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className={styles.container}>
            <div className={styles.head}>
              <h1>Atsukoro</h1>
              <h2>Best Anime bot</h2>
              <div className={styles.buttons}>
                  <div className={styles.invite}>Invite</div>
                  <div className={styles.github}>Github</div>
              </div>
            </div>
        
        </div>
        <div className={styles.section}>
          <div className={styles.container}>

          </div>
        </div>
    </>

  )
}
