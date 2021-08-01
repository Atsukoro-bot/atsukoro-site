import styles from '../../styles/Home.module.css'
import { useEffect, useState } from "react"

import Link from 'next/link'
import Image from "next/image"

import preview1 from "../../public/images/preview1.png"

interface Props { }


export const FeaturePreview: React.FC<Props> = () => {

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const updateImage = () => {
    if (width > 740) return (
      <div data-aos="fade-up-left" className={styles.info}>
        <div className={styles.dcs_l}>
          <h1>Play anime quiz</h1>
          <h2></h2>
        </div>
        <div className={styles.image}>
          <Image src={preview1} alt="preview2" />
        </div>

      </div>
    )
    else return (
      <div data-aos="fade-up-left" className={styles.info}>
        <div className={styles.image}>
          <Image src={preview1} alt="preview2" />
        </div>
        <div className={styles.dcs_l}>
          <h1>Play anime quiz</h1>
          <h2>bruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruhbruhbruh bruh</h2>
        </div>

      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div data-aos="fade-up-right" className={styles.info}>
        <div className={styles.image}>
          <Image src={preview1} alt="preview1" />
        </div>
        <div className={styles.dcs}>
          <h1>Search from Anilist</h1>
          <h2>You </h2>
        </div>
      </div>
      {updateImage()}
      <div data-aos="fade-up-right" className={styles.info}>
        <div className={styles.image}>
          <Image src={preview1} alt="preview3" />
        </div>
        <div className={styles.dcs}>
          <h1>Roleplay commands</h1>
          <h2>joe biden</h2>
        </div>
      </div>
      <div data-aos="fade-up" className={styles.ready}>
        <p>Ready to try it?</p>
        <Link href={"https://discord.com"} passHref>
          <div className={styles.invite}>Invite</div>
        </Link>
      </div>
    </div>

  )
}