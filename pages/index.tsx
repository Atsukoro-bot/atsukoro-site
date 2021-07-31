import Link from 'next/link'

import Aos from "aos"
import "aos/dist/aos.css"

import styles from '../styles/Home.module.css'


import { useEffect } from 'react'

import Meta from '../components/Meta/Meta'

import {FeaturePreview} from "../modules/index/FeaturePreview"
interface Props {}

const Index = ({}) => {
  useEffect(() => {
    Aos.init({
      disable: function() {
        var maxWidth: number = 740;
        return window.innerWidth < maxWidth;
      }})}, [])
  return (
    <>
      <Meta/>
      <div className={styles.wave}/>
          <div data-aos="fade-right" className={styles.container}>
            <div className={styles.head}>
              <h1>Atsukoro</h1>
              <h2 data-aos-delay="20" data-aos="fade-right">Anime based discord bot.</h2>
              <div data-aos-delay="100" data-aos="fade-right" className={styles.buttons}>
                <Link href={"https://discord.com"} passHref>
                  <div className={styles.invite}>Invite</div>
                </Link>
                <Link href={"https://github.com/Atsukoro-bot"} passHref>
                  <div className={styles.github}>Github</div>
                </Link>
              </div>
            </div>
        
        </div>
        <div className={styles.section}>
          <FeaturePreview/>

          <div className={styles.footer}>
            Website made by <Link href="https://github.com/lnxcz">lynx</Link>
          </div>
        </div>
    </>

  )
}

export default Index;