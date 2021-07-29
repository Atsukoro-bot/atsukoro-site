import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Aos from "aos"
import "aos/dist/aos.css"

import styles from '../styles/Home.module.css'

import preview1 from "../public/images/preview1.png"
import { useEffect } from 'react'

import Meta from '../components/Meta/Meta'

export default function Home() {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <>
      <div className={styles.wave}/>
          <div data-aos="fade-right" className={styles.container}>
            <div className={styles.head}>
              <h1>Atsukoro</h1>
              <h2 data-aos-delay="20" data-aos="fade-right">Best Anime bot</h2>
              <div data-aos-delay="100" data-aos="fade-right" className={styles.buttons}>
                <Link href={"https://discord.com"}>
                  <div className={styles.invite}>Invite</div>
                </Link>
                <Link href={"https://github.com/Atsukoro-bot"}>
                  <div className={styles.github}>Github</div>
                </Link>
              </div>
            </div>
        
        </div>
        <div className={styles.section}>
          <div className={styles.container}>
            <div data-aos="fade-up-right" className={styles.info}>
              <div className={styles.image}>
                <Image src={preview1} />
              </div>
              <div className={styles.dcs}>
                  <h1>Cool commands</h1>
                  <h2>bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh</h2>
              </div> 
            </div>
            <div data-aos="fade-up-left" className={styles.info}>
            <div className={styles.dcs_l}>
                    <h1>Cool commands</h1>
                    <h2>bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh</h2>
                </div> 
              <div className={styles.image}>
                  <Image src={preview1} />
                </div>

            </div>
              <div data-aos="fade-up-right" className={styles.info}>
                <div className={styles.image}>
                  <Image src={preview1} />
                </div>
                <div className={styles.dcs}>
                    <h1>Cool commands</h1>
                    <h2>bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh</h2>
                </div> 
              </div>
            <div data-aos="fade-up" className={styles.ready}>
              <p>Ready to try it?</p>
              <Link href={"https://discord.com"}>
                  <div className={styles.invite}>Invite</div>
                </Link>
            </div>
          </div>
          <div className={styles.footer}>
            Website made by <Link href="https://github.com/lnxcz">lynx</Link>
          </div>
        </div>
    </>

  )
}
