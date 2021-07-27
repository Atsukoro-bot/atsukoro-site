import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'




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
                  <div className={styles.invite}><Link href={"https://discord.com"}>Invite</Link></div>
                  <div className={styles.github}>Github</div>
              </div>
            </div>
        
        </div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div className={styles.info}>
              
            </div>
            <div className={styles.info}>
              
              </div>
              <div className={styles.info}>
              
              </div>

          </div>
        </div>
    </>

  )
}
